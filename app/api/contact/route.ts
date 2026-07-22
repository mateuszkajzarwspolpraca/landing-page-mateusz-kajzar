import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, cooperation, goal } = body;

    if (!name || !email || !phone || !cooperation || !goal) {
      return NextResponse.json(
        { message: "Uzupełnij wszystkie wymagane pola." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !contactToEmail) {
      return NextResponse.json(
        { message: "Brakuje konfiguracji formularza." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Landing Page <onboarding@resend.dev>",
      to: contactToEmail,
      replyTo: email,
      subject: "Nowy formularz kontaktowy - Mateusz Kajzar",
      html: `
        <h2>Nowe zgłoszenie z formularza</h2>

        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Forma współpracy:</strong> ${cooperation}</p>
        <p><strong>Główny cel:</strong> ${goal}</p>
      `,
    });

    return NextResponse.json({ message: "Formularz został wysłany." });
  } catch {
    return NextResponse.json(
      { message: "Nie udało się wysłać formularza." },
      { status: 500 }
    );
  }
}