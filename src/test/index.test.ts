import { formaterPrenom } from "./index";

describe("Formatage d'un prénom", () => {
  test("Tester 'Bonjour Alice !'", () => {
    expect(formaterPrenom("  aLiCe  ")).toEqual("Bonjour Alice !");
  });
});
