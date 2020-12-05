import React from 'react';
import styled from 'styled-components';
import { About } from '../components/Styles';

function FaqSection() {
    return(
        <Faq>
            <h2>Any questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, asperiores!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, asperiores!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, asperiores!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, asperiores!</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    ) 
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        cursor: pointer;
        padding: 3rem 0rem;
    }
    .answer {
        padding: 1rem 0rem;
    }
`


export default FaqSection; 