"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface GalleryItem {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
}

interface Gallery6Props {
    heading?: string;
    demoUrl?: string;
    items?: GalleryItem[];
}

const Gallery6 = ({
    heading = "Gallery",
    // demoUrl = "#",
    items = [
        {
            id: "item-1",
            title: "Build Modern UIs",
            summary:
                "Create stunning user interfaces with our comprehensive design system.",
            url: "#",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "item-2",
            title: "Computer Vision Technology",
            summary:
                "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
            url: "#",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        },
        {
            id: "item-3",
            title: "Machine Learning Automation",
            summary:
                "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
            url: "#",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "item-4",
            title: "Predictive Analytics",
            summary:
                "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
            url: "#",
            image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
        },
        {
            id: "item-5",
            title: "Neural Network Architecture",
            summary:
                "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
            url: "#",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        },
    ],
}: Gallery6Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div>
                        <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-slate-800">
                            {heading}
                        </h2>
                    </div>
                    <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto border-slate-200 text-slate-700 hover:bg-slate-50"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto border-slate-200 text-slate-700 hover:bg-slate-50"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                    className="relative left-[-1rem]"
                >
                    <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                                <a
                                    href={item.url}
                                    className="group flex flex-col justify-between h-full bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow"
                                >
                                    <div>
                                        <div className="flex aspect-[3/2] overflow-clip rounded-lg bg-slate-100">
                                            <div className="flex-1">
                                                <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        quality={100}
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2 pt-4 text-lg font-medium text-slate-900 md:mb-3 md:pt-4 md:text-xl">
                                        {item.title}
                                    </div>
                                    <div className="mb-4 line-clamp-2 text-sm text-slate-500 md:mb-6 md:text-base">
                                        {item.summary}
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                        Read more{" "}
                                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export { Gallery6 };
