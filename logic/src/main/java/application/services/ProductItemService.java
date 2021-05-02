package application.services;

import application.Repository.InvoiceRepository;
import application.Repository.ProductItemRepository;
import application.Repository.ProductRepository;
import application.models.Invoice;
import application.models.Product;
import application.models.ProductItem;
import org.springframework.beans.factory.annotation.Autowired;

public class ProductItemService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductItemRepository productItemRepository;

    public void create(long cart, long product) {
        Invoice invoice = invoiceRepository.findById(cart);
        Product product1 = productRepository.findById(product);

        ProductItem productItem = new ProductItem(-1, invoice, product1, 1, 0);

        productItemRepository.save(productItem);
    }

}
