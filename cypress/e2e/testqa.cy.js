describe('Сайт товаров для дома', function () {

    it('Автотест для сайта test.qa.studio', function () {
        cy.visit('https://test.qa.studio');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://test.qa.studio');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Юлия');
        cy.get('#billing_last_name').type('Карпова');
        cy.get('#billing_address_1').type('Бали');
        cy.get('#billing_city').type('Кута');
        cy.get('#billing_state').type('Центральная');
        cy.get('#billing_postcode').type('000001');
        cy.get('#billing_phone').type('79779817819');
        cy.get('#billing_email').type('yuliyacarpova@gmail.com');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').should('be.visible');
    })
})
