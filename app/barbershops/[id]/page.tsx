import { db } from "@/app/_lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

    if (!params.id) {
        // TODO: redirecionar para home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!barbershop) {
        // TODO: redirecionar para home page
        return null;
    }

    return ( 
        <BarberShopInfo barbershop={barbershop} />
        );
}

export default BarbershopDetailsPage;