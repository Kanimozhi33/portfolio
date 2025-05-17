



const About = () => {
    return (
        <div className="bg-black text-teal-500">
            <div class="div-container">
                <div class ="links">
                    <div class="link-div" data-content="content1">Education</div>
                    <div class="link-div" data-content="content2">Skills</div>
                    <div class="link-div" data-content="content3">Experience</div>
                    <div class="link-div" data-content="content4">About Me</div>
                </div>
                <div class="contents">
                    <div id="content1" class="content-div"></div>
                    <div id="content2" class="content-div"></div>
                    <div id="content3" class="content-div"></div>
                    <div id="content4" class="content-div"></div>
                </div>
                
            </div>
        </div>
    )
};


export default About;