import { Dialog } from "@headlessui/react";
import { useState } from "react";
import {
  FaBed,
  FaPlane,
  FaBars,
  FaCar,
  FaBasketballBall,
  FaTaxi,
  FaRegTimesCircle,
} from "react-icons/fa";
import { NavItemsType } from "./HeadingNav";

const navItems: NavItemsType[] = [
  {
    name: "Stays",
    href: "#",
    icon: FaBed,
  },
  {
    name: "Flights",
    href: "#",
    icon: FaPlane,
  },
  {
    name: "Car Rentals",
    href: "#",
    icon: FaCar,
  },
  {
    name: "Attractions",
    href: "#",
    icon: FaBasketballBall,
  },
  {
    name: "Airport Taxis",
    href: "#",
    icon: FaTaxi,
  },
];

function Heading() {
  const [dialog, setDialog] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <span className="block text-white font-semibold text-3xl">
        Booking.com
      </span>
      <div className="hidden lg:flex items-center justify-evenly space-x-4">
        <span className="block text-xl text-white/90">TTD</span>
        <div className="min-w-20 text-center bg-white/90 ring-1 ring-blue-700 text-blue-700 p-1 rounded-md">
          Register
        </div>
        <div className="min-w-20 text-center bg-white/90 ring-1 ring-blue-700 text-blue-700 p-1 rounded-md">
          Sign in
        </div>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setDialog(true)}
          className="inline-flex items-center justify-center rounded-sm p-3 text-white"
        >
          <FaBars className="h-5 w-5 text-white/90" />
        </button>
      </div>
      <Dialog as="div" className="lg:hidden" open={dialog} onClose={setDialog}>
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed sm:ring-1 sm:ring-gray-800/20 inset-y-0 z-20 right-0 w-full overflow-y-auto bg-[#013B94] p-5 sm:max-w-sm ">
          <div className="flex items-center justify-between">
            <a href="#" className="">
              <img
                className="h-10  rounded-md w-auto"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABFFBMVEX///8BT5EAnuMATZEATo51gZ8BTY8AS5IAT5QAUIiGj6oAT44ATpP4+foETJAAUI4APG8ASpYfVo1hdJgALHMPR3kAUJgARIQGS4gFQHIASJAATZdRb5QAUZkAQIIvXZEAOXzq7O8An98ARH7c4ud0gZgAQH4JS4QAUJ8AOH8AMm4AOYW5xNAAQYgAl+MAne0AlMwAi9UAod2GkaSNnbLH2efS5vAAR5wALXWjrbzL0NYkVIFgfps7YopzjakBTYGfq7Y4XINFZIWBmbFfdqSxv804W4EAKHpNc6GVq8AuYJfR2uIAP5KVwd1mr9Cmy+BKpNAAk9R7ttNMoNcAkOZxja+92ugOisaIv9Qcl8iuytrl+f1T/eKJAAAKVElEQVR4nO2cC1fbOBaAq0iV5JEj1d0iuxZJQwI4UJJQYPqgDbRlu7OztKV0Zmdmt///f6xsihMSJSHe08Th3O9QEsBw9PVKV0/73j0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJ+9w5+mcPjT4eHRz8+ryy5lYapHD+rxCzaZwNJ5ufMyefNqb9mFLcLx6zpCnHtTUEoIgbBVrSdvjjeWXeI5+eDFWoskopNjqBQRVMo40IzLqNU/21x2oedhb5vUNFIRxSnUMvYG23fSgmkUSSQp7oRHqxPH6m6iaKSIb/BkNPYREspTFGHMuaSk/vjtskt+W04kRQhRSihBkyDY/kMUI4yurkWUs3htNarqxvZEr6lwjOTpq2WX/jbs7RQSJD6SPA6Pll38W3BIabEgIsRqehUUt9jk5jcNLDnnJNo+WbbATLaCQoa2B9E0SRL88e2yDWaxZYrFkCCfJGsJarfOl60wg8KG6a/ZJixNv+Tj8S0znmnoVZCGf5B1iMR+B6cv1H6hCG63dZS0OyXPNvfRmCGNA5l4p4nw05FaOnqjIRGxHdrxiEQR8TmnURZCbEPp8bDcPf99gscMFeGaMR0M8LXt/wixgzsbP9/3aZRfnOig3EF0GXqKm6fySX89p99/uB3auPlc27jZSwaN19PmcalbostQ0DA5Or9Z7I3jo7W6aWutKRVkqGYrZsJSj94chuRF/M4VleqvDePrGrZtMc0714aIyf7Ciz0HDkMUPJkw+dt4H6JYI5tt+CDidhT+aLFlng+XYXw28fL3idQ+iRDPY2jnirxe5sUbl+H25PS/sSaCGh42NEQhebjAEs+LK9NsT8mNrxo1gwT2B4aRR2SZ+wtXpommGFbXa4jERuVXCzvG0a0Sr9o4DOXDaf3bEUMRM+o6hlRZQ3OnDDd3MkN6wzC8S4YbdR5RM2i0qaGu3yXD6jojxMc3a+kKGWYri1MN751oYccx+IbhCrXDWxgeGpqg4EYMV6mW3sLwpxfUGzXcvlOGJy+YJ24YIvPwLhluvJZao8EqK048/8UKjWluYdiSenhtB3tKsztluFdnnA7ND6V9t0pzi9mGJ3GNRkRfR5EYn4vdhRW3APMabjys8SgZGCLJdPRmceWdn3kND2mMrGEtNxSm1vqwuPLOz5yGezbP2BiiQS1NamxtgeWdn/kMN7YpklSQwXIiOWVxqZfaXIZoouHmu6AmlUDYDrxxtudNySmPStzd33PPLZ5MMHy1G6W7F1noGLEJtW1k0q6XO4ROw/eO66rnH96FaHijSghBETNB2feeXCtR5u9/G6O/HUoWtHNDa6dO1xLdLv2JDNdqYtvE6VE2FudnojiXGIUiPVXzHSU4Sk4T/rHkddRtSCOFsDGS+NdQqpTnqSjKY2hTDZcoCkvd2We4DK0IRZhSIq8hUqQ/wDK/hghp2kFj8up4aXDvrnkqQ1wTs9iYdCMxj6HVZ6ZR5jnFNa4YMmNYLBkzeTuU2CbNwH57EEPKaav0bTDFZehrhmlEpU/Ud9IDpoTYlzyGEZJeqYejOS7DdCsbX71ekQ5hsuySb/rjGm/9uuyy3w6X4W0QlLTOyj1c+05BQ3KqdO3jw19LPp5JKWho5xZY18LwH2U/EVXc0KZV0VKM/VL6DqOgIeZY2am+b9qdso9qimYa23tIO+zxqem8KXdjLGroqXRggEVEUafcZ0wdhpjY+XveF6ar21cv6Ql2QtLO0f5UId/OPbDykrDWKfXo1LWP7ylK6o2nnU4Y1lMaHfu+0WiEEWojDxnqoRffF2rStWHfvFyhFeGMtqH9V9Uxfj775w5DlEsqqchXE22wtf+6xE3RFcN2OCF5VM/f1w1SMmCng5STTrTKfKLdFcPW5KWX6qttz9OBPBXXjTZKu3+elHctwzU/jKdF5PiBMIbn50tTwwgFQXnzqauWPp3aqo4bMaI6/y2BhEI145V2FO6qpY3peeNDSFC+g5h1HYjxemnnUq4Yns7IjOshUvlZDE5sk1Qt2VlMeefHtSL8rxmG53U/n+xTTYRASQv9spjyzo9rZ2bSqn5Ov+3lAafZiIfQ0u7PFDI8++ihG9gxnSzr0G3+0yaW804ycpeG/XKtpOOaQoabO6MxtB/1FTKcWUur/eSGYHYDzc4KGc6M4b370fjdUk+PF1He+SkUw3snckyQdt4uoLgFKGZ4n42PZoOSdhcFYzh+Tx8p605iIcONtfZ4O+yUdBujkOHmg/aYIOncpRieb4/fW0uelnT5u1BvcVJn47V0lfrD2SNvjm7GkNoR+LR7iZZJkRjuhXokfnaCIct6rqaI4Tod7fBTQ+fizrfnnz5//nyxzCdMFTA8q48Z2t9zdRabX/e7vV6l2dz/8mlpjvMbHjc4EoOT7Ol6v0RYOOb4n591K5VmpWste939P36Uwgxcq4lTV7A/NHylWH78C1OhpJRCrI9e+Hy/coPLLz9QYwqunZkpubT6JtFIKTq434KmR9wwD0e3Ljb3mwO77O3l16XUVNdam/NO7pSND/1trbVK1OCZLwL5NKwFo/8r1d+6Q/E7aFbSivr1h+s4cNVSdzs8Pjp53OKsxnyViPwIH/VYoFQQjC6Xfv29N4hh05KlnOcLMBrFuTPz8tGjly93G788umZ3d/dRPYxrNSuoSZQM+nvisZioYPS2oM3LXuUgN+w2Dw6sYqWyjKboWvOu+YrbFIK1IFdQ3/exz7nWktpGSAjm+dEhJWN7wWhneNHtHgxi2K0cHGRfXi4hiK4YZmf20k/y+lhb9m1KokjSxBPS9/nQ5ZKz9dFdi30btsqQ4XfF3hJaoiuXyvSYXmzFyDXZNjexhrZvUMgYOriX2/eU6Ywm0m/PukOZ1LZDK5l+6h0sPp26DE9t+bPDenk6oRRzGzaOGBJcB4YM7nT2Pe/jv0f/6oXV6g2n0jTPWH5fQjV1tUN8dT5hZP5wdUyfYkKzPXw/O7Xg+6Gto2N/9VPlsjIcxDyY3XIY3gKaPieKp096qcl341uHn2wID1bb0LZNbLOtT6nuOza4/7J18qDrUFwdQ8Rw9gQpHDh38P/o9pouw97Bt9UxrGmJhKj3nbvb1We9ZrPnCOHnUuTS20Aiqttt3DqaUOIvvawXHONisXYpRQ2TyDfBk4lbFf9tulJpZX8Js4uihoiGp1OetFv90xXC7qcFml1zX4yvC47z/bnCWQ4l6RP3cLBzNPWQ0MVldziMV28vF2U1zBajZDZJlCSREiQyxmjJ4qcP3876w3817YwwC9zVcObSfixlIWPLnx1BhHRqZhizMezEYf9oY3Z7qv51mU0n0olTOpPq9fZ/XoDPOFuUzwZx32e8E8fhk/7J283bpYvqxX7zMm2Ntram49LfljH9tWw9GOZxxtoYr1+/ftc/2zs+nisXPv+yn61eZFn0oqQLxv8nzz/9589nz57tf/nv3fTLqH77doftAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgB/C/wDDFPBQVGP6zQAAAABJRU5ErkJggg=="
                alt="booking img"
              />
            </a>
            <button
              type="button"
              onClick={() => setDialog(false)}
              className=" inline-flex items-center justify-center rounded-sm p-3 text-white"
            >
              <FaRegTimesCircle className="h-6 w-auto text-white/90" />
            </button>
          </div>
          <div className="flex flex-col space-y-4 py-6">
            {navItems.map((item) => (
              <div
                onClick={() => setDialog(false)}
                key={item.name}
                className=" hover:cursor-pointer relative flex items-center gap-x-2 p-3 text-md hover:bg-gray-100/10 hover:ring-1 hover:ring-white/90"
              >
                <item.icon
                  className="h-6 w-6 text-white/90"
                  aria-hidden="true"
                />
                <a
                  href={item.href}
                  className=" whitespace-nowrap text-white/80"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Heading;
