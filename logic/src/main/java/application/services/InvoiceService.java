package application.services;

import application.Repository.InvoiceRepository;
import application.entity.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {
    @Autowired
    private InvoiceRepository invoiceRepository;

    public Invoice create() {
        return invoiceRepository.save(new Invoice());
    }

    public void modifyInvoice(Invoice invoice) {
        invoiceRepository.save(invoice);
    }
}
