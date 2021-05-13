package application.util;

import application.DTO.InvoiceDto;
import application.Repository.InvoiceDetailRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        List<InvoiceDetail> items = invoiceDetailRepository.findByInvoiceId(entity.getId());

        return new InvoiceDto(entity, items);
    }
}
