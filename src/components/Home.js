import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import List from './List'

const Div = styled.div`
  background-color: black; 
`
const Div2 = styled.div`  
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 4%;
`
const Home = () => {
  return (
    <Div>
      <Div2>
      <Carousel>
      <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dmaviub4l/image/upload/v1652363284/block-master/bumxrm9i4dj97mmjdksc.png"
                        alt="First slide"
                        height="350px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dmaviub4l/image/upload/v1652363286/block-master/oibrmaf9qyikcvrildc0.png"
                        alt="Second slide"
                        height="350px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/dmaviub4l/image/upload/v1652363287/block-master/dbgsrhc6gtpluuahab3q.png"
                        alt="Third slide"
                        height="350px"
                    />           
                </Carousel.Item>
            </Carousel>
            <List/>
            </Div2>
    </Div>
  )
}

export default Home