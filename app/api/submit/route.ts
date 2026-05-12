import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbysNg9Z4sXM_r_21TcCvAHPOdjZFONGdEaiGn-ty965hjVHpHfIFDln2eT5lZq6l67c/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await res.text(); // 👈 đổi từ json -> text

    return NextResponse.json({
      success: true,
      raw: text,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: "API error",
    });
  }
}