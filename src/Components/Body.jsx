import React from 'react'
import SerchBar from './SerchBar'
import Slider_One from './Image_slider'
import Navbar_Two from './Navbar_Two'
import Navbar_Three from './Navbar_Three'
import Card_slider from './Card_slider'
import Card_Slider_Two from './Card_Slider_Two'
import Card_Group from './Card_Group'
import Info_Card from './Info_Card'
import Content from './Content'
import Footer from './Footer'
import Second_page from './second_page'

const Body = () => {
    return (
        <div>
            <SerchBar></SerchBar>
            <Slider_One></Slider_One>
            <Navbar_Two></Navbar_Two>
            <Navbar_Three></Navbar_Three>
            <Card_slider></Card_slider>
            <Navbar_Three></Navbar_Three>
            <Card_Slider_Two></Card_Slider_Two>
            <Navbar_Three></Navbar_Three>
            <Card_slider></Card_slider>
            <Navbar_Three></Navbar_Three>
            <Card_Slider_Two></Card_Slider_Two>
            <Card_Group></Card_Group>
            <Info_Card></Info_Card>
            <Content></Content>
        </div>
    )
}

export default Body