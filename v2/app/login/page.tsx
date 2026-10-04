'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";

const SESSION_KEY = "artisyhub_v2_session";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  function requestOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    const clean = phone.replace(/\D/g, "");
    if (!/^\d{8}$/.test(clean)) {
      setError("8 оронтой утасны дугаар оруулна уу.");
      return;
    }
    setPhone(clean);
    setStep("otp");
  }

  function verifyOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (otp !== "123456") {
      setError("Preview тестийн OTP код 123456.");
      return;
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify({ phone }));
    window.dispatchEvent(new Event("artisyhub-auth-change"));
    router.push("/account");
    router.refresh();
  }

  return (
    <>
      <Header />
      <main className="auth-page shell">
        <section className="auth-card">
          <div className="auth-brand-mark">A</div>
          <span className="eyebrow dark">ARTISYHUB ACCOUNT</span>
          <h1>{step === "phone" ? "Утсаараа үргэлжлүүлэх" : "Баталгаажуулах код"}</h1>

          {step === "phone" ? (
            <>
              <p>Бүртгэлтэй дугаар бол нэвтэрнэ. Шинэ дугаар бол OTP баталгаажсаны дараа бүртгэл автоматаар үүснэ.</p>
              <form onSubmit={requestOtp} className="auth-form">
                <label>
                  Утасны дугаар
                  <div className="phone-input-row">
                    <span>+976</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 8))}
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="99112233"
                      autoFocus
                    />
                  </div>
                </label>
                {error && <div className="auth-error">{error}</div>}
                <button className="primary-button full-button" type="submit">Код авах</button>
              </form>
            </>
          ) : (
            <>
              <p><strong>+976 {phone}</strong> дугаар руу 6 оронтой баталгаажуулах код илгээнэ.</p>
              <form onSubmit={verifyOtp} className="auth-form">
                <label>
                  OTP код
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="000000"
                    autoFocus
                  />
                </label>
                <div className="preview-otp-note">Preview тестийн код: <strong>123456</strong>. Бодит SMS одоохондоо илгээгдэхгүй.</div>
                {error && <div className="auth-error">{error}</div>}
                <button className="primary-button full-button" type="submit">Нэвтрэх</button>
                <button className="text-button" type="button" onClick={() => { setStep("phone"); setOtp(""); setError(""); }}>Дугаар солих</button>
              </form>
            </>
          )}

          <div className="auth-footnote">Уран бүтээлчдийн профайл, үнэ, багцыг нэвтрэхгүйгээр үзэж болно. Захиалгын хүсэлт илгээх үед л нэвтрэлт шаардлагатай.</div>
        </section>
      </main>
    </>
  );
}
