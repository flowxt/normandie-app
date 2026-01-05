import { NextResponse } from "next/server";

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

    // Ici, vous pouvez intégrer :
    // 1. Envoi d'email (avec Resend, SendGrid, Nodemailer, etc.)
    // 2. Enregistrement dans une base de données
    // 3. Envoi vers un CRM
    // 4. Notification Slack/Discord

    // Pour l'instant, on log les données (à remplacer par votre logique)
    console.log("Nouvelle demande de contact:", {
      firstName,
      lastName,
      email,
      phone,
      propertyType,
      message,
      date: new Date().toISOString(),
    });

    // Exemple d'envoi d'email (décommentez et configurez selon votre service)
    /*
    await sendEmail({
      to: "vincent@exp-gisors.fr",
      subject: `Nouvelle demande - ${firstName} ${lastName}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Type de bien :</strong> ${propertyType}</p>
        <p><strong>Message :</strong></p>
        <p>${message || "Aucun message"}</p>
      `,
    });
    */

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

