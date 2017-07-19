
var fs = require('fs');
var PDFDocument = require('pdfkit');

var doc = new PDFDocument({
  size: [595, 842],
  margin: 0
});

// Write stuff into PDF
    doc.image('logo.png', 25, 42, { width: 115});

    doc.fontSize(12);
    doc.text('Biisafe Oy', 55*2.8, 15*2.8);
    doc.text('Metsapirtinte 1', 55*2.8, 20*2.8);
    doc.text('02130 Espoo', 55*2.8, 25*2.8);
    doc.text('FINLAND', 55*2.8, 30*2.8);

    doc.text(`Company ID: 2451192-1`, 95*2.8, 15*2.8);
    doc.text('VAT-number: FI24511921', 95*2.8, 22*2.8);

    doc.font('Time_Roman_Bold.ttf').fontSize(15);
    doc.text('Payment Receipt', 155*2.8, 17*2.8);
    doc.font('Time_Roman_Normal.ttf').fontSize(12);

    // doc.line(10, 35, 205, 35);
    doc.moveTo(10*2.8, 38*2.8).lineTo(205*2.8, 38*2.8).fill("#000")

    doc.font('Time_Roman_Bold.ttf')
    doc.text('Billed to:', 10*2.8, 45*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text(`cardholder`, 10*2.8, 52*2.8);
    doc.text(`zipcode`, 10*2.8, 58*2.8);
    doc.text(`userCountry`, 10*2.8, 64*2.8);

    doc.font('Time_Roman_Bold.ttf')
    doc.text( 'Date:', 145*2.8, 45*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text( `12412412411`, 167*2.8, 45*2.8);
    doc.font('Time_Roman_Bold.ttf')
    doc.text( 'Method:', 145*2.8, 52*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text( `235235235235`, 167*2.8, 52*2.8);
    doc.font('Time_Roman_Bold.ttf')
    doc.text( 'Receipt#:', 145*2.8, 59*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text( 'receipt', 167*2.8, 59*2.8);
    doc.font('Time_Roman_Bold.ttf')
    doc.text( 'Invoice#:', 145*2.8, 66*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text( 'invoiceID', 167*2.8, 66*2.8);

    // doc.line(10, 80, 205, 80);
    doc.moveTo(10*2.8, 85*2.8).lineTo(205*2.8, 85*2.8).fill("#000")
    doc.font('Time_Roman_Bold.ttf')
    doc.text('Item', 10*2.8, 87*2.8);
    doc.text('Description', 25*2.8, 87*2.8);
    doc.text('Number of employee', 135*2.8, 87*2.8);
    doc.text('Price', 185*2.8, 87*2.8);
    doc.font('Time_Roman_Normal.ttf')
    // doc.line(10, 94, 205, 94);

     doc.moveTo(10*2.8, 97*2.8).lineTo(205*2.8, 97*2.8).fill("#000")

    doc.text('1', 14*2.8, 102*2.8);
    doc.text(`BiiSate Portal asfasf monthly fee safsfasfas`, 25*2.8, 102*2.8);
    doc.text(`245235`, 142*2.8, 102*2.8);
    doc.text(`35235235`, 182*2.8, 102*2.8, {align: 'left'});

    doc.moveTo(10*2.8, 110*2.8).lineTo(205*2.8, 110*2.8).fill("#000")
    // doc.line(10, 107, 205, 107);

     doc.font('Time_Roman_Bold.ttf')
    doc.text('Subtotal:', 145*2.8, 120*2.8);
    doc.font('Time_Roman_Normal.ttf')
    doc.text('asfasfafsa', 182*2.8, 120*2.8, {align: 'left'});
     doc.font('Time_Roman_Bold.ttf')
    doc.text(`VAT (24%):`, 145*2.8, 130*2.8);
    doc.font('Tinos-Regular.ttf')
    doc.text('afasf €', 182*2.8, 130*2.8), {align: 'left'};
     doc.font('Time_Roman_Bold.ttf')
    doc.text('Invoice:', 145*2.8, 140*2.8);
    doc.font('Tinos-Regular.ttf')
    doc.text('safasfa  €', 182*2.8, 140*2.8, {align: 'left'});

    doc.fontSize(9);
    doc.text('1. You may be required to account for VAT under the reverse change procedure', 10*2.8, 155*2.8);
    doc.text('according to the local VAT rules in your country.', 13*2.8, 160*2.8);
doc.pipe(fs.createWriteStream('file.pdf'))
                  .on('finish', function() {
                    console.log('done')
                  })
doc.end();

// Close PDF and write file.

