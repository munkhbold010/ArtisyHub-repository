'use client';

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { TEST_ACCOUNTS, TEST_OTP, resolveTestSession, roleHome, roleLabel } from "../../lib/testAccounts";

const SESSION_KEY = "artisyhub_v2_session";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  function chooseTestAccount(value: string) {
    setPhone(value);
    setOtp("");
    setError("");
    setStep("phone");
  }

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
    if (otp !== TEST_OTP) {
      setError("Preview тестийн OTP код 123456.");
      return;
    }

    const session = resolveTestSession(phone);
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    window.dispatchEvent(new Event("artisyhub-auth-change"));
    router.push(roleHome(session.role));
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
              <p>Тестийн 3 тогтмол аккаунтаас сонгож болно. Бусад 8 оронтой дугаар preview дээр захиалагчийн аккаунт гэж үүснэ.</p>

              <div className="test-account-grid">
                {Object.values(TEST_ACCOUNTS).map((account) => (
                  <button
                    type="button"
                    key={account.phone}
                    className={"test-account-card " + (phone === account.phone ? "selected" : "")}
                    onClick={() => chooseTestAccount(account.phone)}
                  >
                    <span>{roleLabel(account.role)}</span>
                    <strong>{account.phone}</strong>
                  </button>
                ))}
              </div>

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
                      placeholder="88111111"
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
              <p><strong>+976 {phone}</strong> дугаарын тест нэвтрэлтийг баталгаажуулна.</p>
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
                <div className="preview-otp-note">Бүх тест аккаунтын OTP: <strong>123456</strong>. Бодит SMS илгээгдэхгүй.</div>
                {error && <div className="auth-error">{error}</div>}
                <button className="primary-button full-button" type="submit">Нэвтрэх</button>
                <button className="text-button" type="button" onClick={() => { setStep("phone"); setOtp(""); setError(""); }}>Дугаар солих</button>
              </form>
            </>
          )}

          <div className="auth-footnote">Тестийн дүрүүд тусдаа: 99111111 — уран бүтээлч, 88111111 — захиалагч, 77111111 — рестораны менежер.</div>
        </section>
      </main>
    </>
  );
}
