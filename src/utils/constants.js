import { bags, capes, eva_mats, leather_mats } from ".";

export const links = [
   {
      id: 1,
      text: "Главная",
      url: "/",
   },
   {
      id: 4,
      text: "продукты",
      url: "/products",
   },
   {
      id: 2,
      text: "Галерея",
      url: "/galery",
   },
   {
      id: 3,
      text: "контакты",
      url: "/contacts",
   },
];

export const products = [eva_mats, leather_mats, capes, bags.bag];

export const fetchLink = "https://localhost:44315/api/";

export const formatePhoneNumber = (value, previousValue) => {
   if (!value) return value;

   const currentValue = value.replace(/[^\d\+]/g, "");
   const cvLength = currentValue.length;

   if (!previousValue || value.length > previousValue.length) {
      if (currentValue[0] == "+") {
         if (cvLength < 2) return currentValue;
         if (cvLength < 6)
            return `${currentValue.slice(0, 2)} ${currentValue.slice(2)}`;

         if (cvLength < 9)
            return `${currentValue.slice(0, 2)} (${currentValue.slice(
               2,
               5
            )}) ${currentValue.slice(5)}`;

         if (cvLength < 11)
            return `${currentValue.slice(0, 2)} (${currentValue.slice(
               2,
               5
            )}) ${currentValue.slice(5, 8)}-${currentValue.slice(8)}`;

         return `${currentValue.slice(0, 2)} (${currentValue.slice(
            2,
            5
         )}) ${currentValue.slice(5, 8)}-${currentValue.slice(
            8,
            10
         )}-${currentValue.slice(10, 12)}`;
      } else {
         if (cvLength < 1) return currentValue;
         if (cvLength < 5)
            return `${currentValue.slice(0, 1)} ${currentValue.slice(1)}`;

         if (cvLength < 8)
            return `${currentValue.slice(0, 1)} (${currentValue.slice(
               1,
               4
            )}) ${currentValue.slice(4)}`;

         if (cvLength < 10)
            return `${currentValue.slice(0, 1)} (${currentValue.slice(
               1,
               4
            )}) ${currentValue.slice(4, 7)}-${currentValue.slice(7)}`;

         return `${currentValue.slice(0, 1)} (${currentValue.slice(
            1,
            4
         )}) ${currentValue.slice(4, 7)}-${currentValue.slice(
            7,
            9
         )}-${currentValue.slice(9, 11)}`;
      }
   }
   return currentValue;
};
