package application.services;

import application.Repository.InvoiceDetailRepository;
import application.Repository.InvoiceRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService {
    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    public Invoice create() {
        return invoiceRepository.save(new Invoice());
    }

    public void modifyInvoice(Invoice invoice) {
        invoiceRepository.save(invoice);
    }
}
