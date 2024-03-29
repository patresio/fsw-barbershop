import { db } from "@/app/_lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

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
        include: {
            services:true,
        },
    });

    if (!barbershop) {
        // TODO: redirecionar para home page
        return null;
    }

    return ( 
        <div>
            <BarberShopInfo barbershop={barbershop} />

            <div className="flex flex-col px-5 gap-4 py-6">
                {barbershop.services.map((service) =>(
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
        );
}

export default BarbershopDetailsPage;