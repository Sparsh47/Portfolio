import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { fName, lName, email, phone, service, desc } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sparshshandilya123@gmail.com",
                pass: "ytdljecvxvnvpunv",
            },
        });

        const mailOptions = {
            from: "sparshshandilya123@@gmail.com",
            to: "sparshshandilya123@gmail.com",
            subject: service,
            text: `Hi I am ${fName} ${lName}. My email is ${email} and my phone number is ${phone}. I am interested in ${service}. My message is: ${desc}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent and data stored successfully", success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: `Error: ${err}`, success: false }, { status: 500 });
    }
}
