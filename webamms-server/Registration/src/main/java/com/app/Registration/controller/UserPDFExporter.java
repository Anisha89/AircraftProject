package com.app.Registration.controller;

import java.awt.Color;
import java.io.IOException;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import com.app.Registration.model.servicetab;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

public class UserPDFExporter {
	private List<servicetab> listUsers;

	public UserPDFExporter(List<servicetab> listUsers) {
		this.listUsers = listUsers;
	}

	private void writeTableHeader(PdfPTable table) {
		PdfPCell cell = new PdfPCell();
		cell.setBackgroundColor(Color.gray);
		cell.setPadding(8);
		Font font = FontFactory.getFont(FontFactory.defaultEncoding);
		font.setColor(Color.WHITE);
		cell.setPhrase(new Phrase("Ammtcno", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("category", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("description", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("effectivity", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("trade", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("type", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("smrdno", font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("gsenos", font));
		table.addCell(cell);
	}

	private void writeTableData(PdfPTable table) {
		for (servicetab service : listUsers) {
			table.addCell(service.getAmmtcno());
			table.addCell(service.getCat());
			table.addCell(service.getDescription());
			table.addCell(service.getEffectivity());
			table.addCell(service.getTrade());
			table.addCell(service.getType());
			table.addCell(service.getSmrdno());
			table.addCell(service.getGsenos().toString());
		}
	}

	public void export(HttpServletResponse response) throws DocumentException, IOException {
		Document document = new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		font.setSize(2);
		font.setColor(Color.BLUE);
		Paragraph p = new Paragraph("List of Users", font);
		p.setAlignment(Paragraph.ALIGN_LEFT);
		document.add(p);
		PdfPTable table = new PdfPTable(8);
		table.setWidthPercentage(100f);
		table.setWidths(new float[] { 1.5f, 3.5f, 3.0f, 3.0f, 1.5f, 3.0f, 3.0f, 1.5f });
		table.setSpacingBefore(10);
		writeTableHeader(table);
		writeTableData(table);
		document.add(table);
		document.close();
	}
}