import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import Search from "./_components/search";
import Welcome from "./_components/welcome";

export default async function Home() {

  // Chamar prisma e pegar barbearias

  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div  className="px-5 pt-5">
        <Welcome />
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
        <BookingItem />
      </div>
      <div className="px-5 mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop:any) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
        </div>
      </div>
      <div className="px-5 mt-6 mb-[4.5rem]">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">Populares</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop:any) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
        </div>
      </div>
    </div>
  );
}
