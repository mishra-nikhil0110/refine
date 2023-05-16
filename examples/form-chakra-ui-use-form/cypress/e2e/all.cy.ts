/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-chakra-ui-use-form", () => {
    const BASE_URL = "http://localhost:3000";

    const mockPost = {
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        status: "published",
    };

    const fillForm = () => {
        cy.get("#title").clear().type(mockPost.title);
        cy.get("#status").select(mockPost.status);
        cy.get("#categoryId").select(1);
    };

    const assertSuccessResponse = (response: any) => {
        const body = response?.body;

        expect(response?.statusCode).to.eq(200);
        expect(body).to.have.property("id");
        expect(body).to.have.property("category");
        expect(body?.title).to.eq(mockPost.title);
        expect(body?.status?.toLowerCase()).to.eq(
            mockPost?.status?.toLowerCase(),
        );

        cy.getChakraUINotification().contains(/success/gi);
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq("/posts");
        });
    };

    const submitForm = () => {
        return cy.getSaveButton().click();
    };

    beforeEach(() => {
        cy.visit(BASE_URL);
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it("should create and delete record", () => {
        cy.intercept("GET", "/posts/*").as("getPost");
        cy.intercept("POST", "/posts").as("createPost");
        cy.intercept("DELETE", "/posts/*").as("deletePost");

        cy.getCreateButton().click();

        fillForm();
        submitForm();

        cy.wait("@createPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);

            // visit eidt page to delete the record
            cy.visit(`${BASE_URL}/posts/edit/${response?.body?.id}`);
            cy.wait("@getPost").then(() => {
                cy.getDeleteButton()
                    .click()
                    .getChakraUIDeletePopoverButton()
                    .click();

                cy.wait("@deletePost").then((interception) => {
                    const response = interception?.response;

                    expect(response?.statusCode).to.eq(200);
                    cy.getChakraUINotification().contains(/success/gi);
                    cy.location().should((loc) => {
                        expect(loc.pathname).to.eq("/posts");
                    });
                });
            });
        });
    });

    it("should edit record", () => {
        cy.intercept("GET", "/posts/*").as("getPost");
        cy.intercept("PATCH", "/posts/*").as("patchPost");

        cy.getEditButton().first().click();

        // assert response values are equal to the form values
        cy.wait("@getPost").then((interception) => {
            const response = interception?.response;
            const body = response?.body;

            cy.get("#title").should("have.value", body?.title);
            cy.get("#status").should("have.value", body?.status);
            cy.get("#categoryId").should("have.value", body?.category?.id);
        });

        fillForm();
        submitForm();

        cy.wait("@patchPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should create form render errors", () => {
        cy.getCreateButton().click();

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });

    it("should edit form render errors", () => {
        cy.intercept("GET", "/posts/*").as("getPost");

        cy.getEditButton().first().click();

        cy.wait("@getPost");

        cy.get("#title").should("not.have.value", "").clear();
        cy.get("#status").select([]);
        cy.get("#categoryId").select([]);

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });
});
