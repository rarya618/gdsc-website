import React from 'react';
import styled from 'styled-components';
import { mainHex } from '../../colors';

import SafeArea from '../../components/SafeArea';

const margin = "margin: 10px 20px;";

const Page = styled.div`
    color: ${mainHex};
    padding: 0 0 100px 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;

    @media only screen and (max-width: 768px) {
        height: auto;
        padding: 75px 0;
    }  

    @media only screen and (max-width: 425px) {
        height: auto;
        padding: 50px 0;
    } 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


const Content = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        padding: 5px;
    } 

    @media only screen and (max-width: 525px) {
        padding: 1px;
    } 
`;

export const Title = styled.h1`
    font-size: calc(35px + 1vmin);
    color: ${mainHex};
    ${margin}
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(25px + 1vmin);
    }    

    @media only screen and (max-width: 768px) {
        text-align: center;  
        font-size: calc(25px + 1vmin);
    } 

    @media only screen and (max-width: 425px) {
        font-size: calc(20px + 1vmin);
    } 
`;

export const Text = styled.p`
    ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.8em;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    }
`;

export const Category = styled.div`
    box-shadow: 1px 3.97px 3.97px 0 rgb(84,84,84,0.15);
    width: 13%;

    @media only screen and (max-width: 768px) {
        width: 25%;
    }
`;

export const CategoryText = styled.p`
    color: #3a3a3a;
    font-size: calc(8px + 1vmin);
`;

export const CategoryImage = styled.img`
    width: 50%;
    height: 45%;
`;

export const Bullet = styled.li`
   ${margin}
    color: #3a3a3a;
    font-size: calc(12px + 1vmin);
    line-height: 1.6em;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(12px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
        font-size: calc(10px + 1vmin);
    }
`;

export const clues = [
    "Some may say it's the main strip of  USYD, regularly home to many USU stalls and vendors. Talk a walk down the road and keep an eye out.",
    "After you finish having a feed, take a walk outside and admire the local art. The clue will have you standing above a wealth of knowledge.",
    "To infinity and beyond!",
    "Gee it’s getting hot this winter, there is no better way to cool off than taking a dip. Make sure to keep Fisher in sight or you might just get lost.",
    "Manning or Ralph’s? A place where arts and education meet, your next clue will be found in the courtyard of this artist’s retreat.",
    "On the border of wilderness and concrete car parks hides the next clue. Duck under the massive glass bridge and look to your left.",
    "Follow the path less traveled to find the next clue to be unraveled. 3 bridges lie across the heart of campus, one which no one dares to tread. Enveloped by the aroma of Italian Herbs & Cheese, it's here you'll find your next lead, under the brutalist canopy. ",
    "One of the easiest buildings to get to from Redfern station, this building is known for its comfy study nooks and winding stairs. Your next clue is at this building’s cafe.",
    "Finding a place to study in J03 is tough – unless you’re a tutor. Your next clue is located outside the 4 rooms normal students aren’t allowed to enter.",
    "A cream palace on City Rd, bounded by the dull Mereweather, your next clue will be located outside the lecture theatres of this beautiful building.",
    "Passing an array of staff offices, your next clue will be found at the Link between Mechanical Engineering and PNR.",
    "Travel North – no! East? Absolutely not. This time you have to go up.\n Surrounded by drama, computers, and planes, you will find your next clue where cars meet the skyline. Kachow!",
    "Put your navigation skills to the test and follow this clue to your best. Your next clue resides where cyclists park and lock their rides, and where mechanical minds innovate with pride. Pedal your way to this location and see your next clue in front of your eyes.",
    "This is a building that’s old and grey - ABS’s less attractive cousin has seen better days. Seeking knowledge of economics and trade? Don’t be shy, your prize awaits!",
    "Travel to those small rooms where mathematics students stand around with tutorial sheets in their hands, admitting that they haven’t caught up on last week’s lectures. Your next clue will be near USYDs own Great Pyramids.",
    "Parramatta Road isn’t the only place with 8 lanes. Your next clue is located where brains turn into brawn.",
    "Every student at USYD ends their journey here. Where the carillon bells ring and the graduation caps fly, your next clue will be found at the oldest building on campus.",
    "Perhaps less exciting than robots and rockets,\n but these engineers have the city in their pocket!\n Bridges, buildings, tunnels - they’ve built it all,\n creating structures that stand strong and tall. Your next clue will be at the entrance of this building.",
    "Half the engineering population migrated from here to J03 to save their hygiene standards. Your next clue is on the second level of USYD’s infamous engineering building.",
    "Where might you find a mummy and a stone soldier chatting about the relevance of modern art over a cup of coffee?",
    "Crowds of schoolchildren gather here for their English excursions. Little do they know that they will soon be one of us, looking at youthful children from behind tinted glass, reminiscing on the last days we were happy.",
    "It’s the USYD equivalent of a catacomb, with 8 floors. Each floor contains the sleeping dead to criminally insane crammers. Check outside just before you enter to find what you are looking for.",
    "For those who don’t drive, a bus or swim to uni, this one would be very obvious. Take a walk on the regular route and when the wood is below foot you know you are in the right place",
    "It’s all about building this and building that, though never actually ever building anything. If you can get it inside, make your way to the 3rd and take a breath of fresh air outside.",
    "It’s a mixture, of a bit of chemistry and a bit of engineering, and you get the next clue. Journey to the center of the buildings and you’ll find it.",
    "Take a walk from Fisher to PNR. If you get tired take a break, lie back on the curvy chairs, and enjoy the view of the garden and church. You might just spot something up on the bench.",
];

const CluesDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Clue = styled.div`
    padding: 5px 25px 40px 22px;
    width: calc(33% - 63px);
    margin: 7px 8px;
    box-shadow: 0px 5px 20px 0 rgb(0,0,0,0.15);
    border: solid 1px;
    border-radius: 5px;
    position: relative;

    @media only screen and (max-width: 1024px) {
        width: calc(50% - 65px);
    }

    @media only screen and (max-width: 600px) {
        width: calc(100% - 65px);
    }
`;

const ClueText = styled.p`
    color: #3a3a3a;
    font-size: calc(10px + 1vmin);
    line-height: 1.8em;
    text-align: left;

    @media only screen and (max-width: 1024px) {
        font-size: calc(11px + 1vmin);
        line-height: 1.5em;
    }   

    @media only screen and (max-width: 768px) {
        text-align: center; 
    }

    @media only screen and (max-width: 600px) {
        font-size: calc(12px + 1vmin);
    }

    @media only screen and (max-width: 425px) {
        margin: 0 0 15px 0;
    }
`;

const ClueIndex = styled.span`
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

function Home() {
    return (
        <Page>
            <SafeArea>
                    <CluesDisplay>
                        {clues.map((clue, index) => {
                            return <Clue>
                                <ClueText>{clue}</ClueText>
                                <ClueIndex>{index + 1}</ClueIndex>
                            </Clue>
                        })}
                    </CluesDisplay>
            </SafeArea>
        </Page>
    );
}

export default Home;
