package application.util;

import application.DTO.InvoiceDto;
import application.Repository.InvoiceDetailRepository;
import application.entity.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceConverter implements DtoConverter<Invoice, InvoiceDto> {
    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    @Override
    public Invoice fromDto(InvoiceDto dto) {
        return null;
    }

    @Override
    public InvoiceDto fromEntity(Invoice entity) {
        InvoiceDto invoice = new InvoiceDto();
        invoice.setId(entity.getId());
        //invoice.setSale();
        invoice.setClientName(entity.getClientName());
        invoice.setDni(entity.getDni());
        invoice.setDate(entity.getDate());
        invoice.setTotal(entity.getTotal());
        invoice.setItems(invoiceDetailRepository.findByInvoiceId(entity.getId()));

        return invoice;
    }
}