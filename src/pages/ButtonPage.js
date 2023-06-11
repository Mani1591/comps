import '../index.css';
import Button from '../components/Button';
import { GiClick } from 'react-icons/gi';
import { HiShoppingCart, HiBell, HiBan, HiZoomIn } from 'react-icons/hi';

function ButtonPage() {
    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <div>
            <div>
                <Button primary outline rounded onClick={handleClick} className="mb-3">
                    <GiClick />
                    Click Me
                </Button>
            </div>
            <div>
                <Button secondary outline onMouseOver={handleClick} className="mb-2 ml-2">
                    <HiShoppingCart />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button success outline rounded className="mb-1">
                    <HiBell />
                    See Deals
                </Button>
            </div>
            <div>
                <Button warning rounded>
                    <HiBan />
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    <HiZoomIn />
                    Zoom In
                </Button>
            </div>
        </div>
    );
}
export default ButtonPage;