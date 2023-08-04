import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
    children?: React.ReactElement | React.ReactElement[]
    className?: string;
    showDots?: boolean;
    desktopItemsCount?: number;
    showArrows?: boolean;
    autoPlay?: boolean;
}
const Carousel = ({ desktopItemsCount = 4, showArrows = true, autoPlay = false, children, className, showDots = false }: Props) => {
    return (
        <MultiCarousel
            swipeable
            draggable
            arrows={showArrows}
            showDots={showDots}
            autoPlay={autoPlay}
            autoPlaySpeed={500}
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: desktopItemsCount ?? 4,

                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                }
            }}
            infinite
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass={`carousel-container ${className}`}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
        >
            {children}
        </MultiCarousel>
    )
}
export default Carousel
