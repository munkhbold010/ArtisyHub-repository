export type TestRole = "artist" | "customer" | "restaurant_manager";

export type TestSession = {
  phone: string;
  role: TestRole;
  name: string;
};

export const TEST_OTP = "123456";

export const TEST_ACCOUNTS: Record<string, TestSession> = {
  "99111111": {
    phone: "99111111",
    role: "artist",
    name: "Тест уран бүтээлч",
  },
  "88111111": {
    phone: "88111111",
    role: "customer",
    name: "Тест захиалагч",
  },
  "77111111": {
    phone: "77111111",
    role: "restaurant_manager",
    name: "Тест рестораны менежер",
  },
};

export function resolveTestSession(phone: string): TestSession {
  return TEST_ACCOUNTS[phone] ?? {
    phone,
    role: "customer",
    name: "ArtisyHub хэрэглэгч",
  };
}

export function roleHome(role: TestRole) {
  if (role === "artist") return "/artist/dashboard";
  if (role === "restaurant_manager") return "/restaurant-manager";
  return "/account";
}

export function roleLabel(role: TestRole) {
  if (role === "artist") return "Уран бүтээлч";
  if (role === "restaurant_manager") return "Рестораны менежер";
  return "Захиалагч";
}
