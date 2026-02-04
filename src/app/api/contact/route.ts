import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, propertyType, message } = body;

    // Validation basique
    if (!firstName || !lastName || !email || !phone || !propertyType) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Mapping des types de biens
    const propertyTypeLabels: Record<string, string> = {
      maison: "Maison",
      appartement: "Appartement",
      terrain: "Terrain",
      immeuble: "Immeuble",
      autre: "Autre",
    };

    // Envoi de l'email via Resend
    const { error } = await resend.emails.send({
      from: "eXp Gisors <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "contact@ener-immo92.fr",
      replyTo: email,
      subject: `[eXp Gisors] Nouvelle demande - ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3771, #2998a6); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #1e3771; margin-bottom: 5px; }
            .field-value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e0e0e0; }
            .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2998a6; }
            .footer { background: #1e3771; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle demande de contact</h1>
              <p style="margin: 10px 0 0; opacity: 0.9;">Site eXp Gisors - Secteur Normandie/Vexin</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nom complet</div>
                <div class="field-value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Téléphone</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Type de bien</div>
                <div class="field-value">${propertyTypeLabels[propertyType] || propertyType}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message || "<em>Aucun message</em>"}</div>
              </div>
            </div>
            <div class="footer">
              <p>eXp Realty - Vincent Leclerc</p>
              <p>Secteur Gisors • Eure • Val-d'Oise • Oise</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été envoyée avec succès. Nous vous recontactons sous 24h.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de votre demande" },
      { status: 500 }
    );
  }
}

