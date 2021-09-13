import Work from '../Work/Work'
import Navbar from '../NavBar/NavBar'
import './Projects.css'
import Slide from "react-reveal";

function Works() {

    // color="#db5688"

    return (
        <div>
            <h1>Check out my projects</h1>
            {/* <hr size="4.5" width="25%" color="#BSSae08d"/> */}
            <div className={'WorksContainer'}>

                <Slide top duration={1100}>
                    <Work workTitle={'My Resume'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
                </Slide>

                <Slide bottom duration={1100}>
                    <Work workTitle={'Bluberries shop'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
                </Slide>

                <Slide top duration={1100}>
                    <Work workTitle={'Events & wishes'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
                </Slide>

                <Slide bottom duration={1100}>
                    <Work workTitle={'Tik Tak'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
                </Slide>
                {/* <Slide left duration={1100}>
                <Work workTitle={'My Resume'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
            </Slide>

            <Slide bottom duration={1100}>
                <Work workTitle={'Bluberries shop'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
            </Slide>

            <Slide top duration={1100}>
                <Work workTitle={'Events & wishes'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
            </Slide>

            <Slide right duration={1100}>
                <Work workTitle={'Tik Tak'} workDescription={'Coupon management system allows companies to generate coupons as part of advertising campaigns And marketing that they sustain. The system also has registered customers. Customers can purchase coupons.'} />
            </Slide> */}
            </div>
        </div>
    )
}

export default Works