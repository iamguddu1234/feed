import React from "react";
import classes from "./FeedContentDiv.module.css";
import base from "../CommonAppUtilities/AppContentDiv.module.css";

import FeedTitleDiv from "./ContactTitleDiv";

import BibhuImg from "./Bibhu.jpeg";

import OnePost from "./OnePost";
import Single_user from "./Single_user_latest_post";

import {
  BsFillImageFill,
  BsCameraVideoFill,
  BsCalendar2DayFill,
  BsPostcardFill,
  BsFillChatSquareDotsFill,
  BsGearFill,
  BsFillPeopleFill,
  BsDiagram3Fill,
  BsPersonFill,
  BsCalendarPlusFill,
  BsFillFileEarmarkTextFill,
  BsPeopleFill,
  BsPatchQuestionFill,
  BsInfoCircleFill,
  BsFillFileRuledFill,
  BsShieldFill,
  BsFillFileRichtextFill,
  BsSearch,
  BsFillSuitHeartFill,
  BsHospitalFill
} from "react-icons/bs";

import { MdGroups } from "react-icons/md";

const FeedContentDiv = () => {
  return (
    <div className={base.appContentDiv}>
      <FeedTitleDiv />

      <div className={classes.scrollDiv}>
        <div className={classes.rightBox}>
          <div className={classes.title}>Manage</div>

          <div className={classes.container1}>
            <BsSearch className={classes.iconBg} />

            <div className={classes.heading1}>Search</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsFillFileRichtextFill className={classes.iconBg} />

            <div className={classes.heading1}>All Posts</div>
          </div>
          <div className={classes.horiLine}></div>

          {/* <div className={classes.container1}>
            <BsPeopleFill className={classes.iconBg} />

            <div className={classes.heading1}>Friends</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsFillSuitHeartFill className={classes.iconBg} />

            <div className={classes.heading1}>Likes</div>
          </div>
          <div className={classes.horiLine}></div> */}


          <div className={classes.container1}>
            <BsHospitalFill className={classes.iconBg} />

            <div className={classes.heading1}>Institute</div>
          </div>
          <div className={classes.horiLine}></div>

          <Single_user />
          <div className={classes.horiLine}></div>

          <Single_user />
          <div className={classes.horiLine}></div>

          <Single_user />
          {/* <div className={classes.horiLine}></div> */}

          

          {/* <div className={classes.container1}>
            <BsFillChatSquareDotsFill className={classes.iconBg} />

            <div className={classes.heading1}>Latest Post</div>
          </div>
          <div className={classes.container1}>
            <BsFillChatSquareDotsFill className={classes.iconBg} />

            <div className={classes.heading1}>Latest Post</div>
          </div> */}

          <div className={classes.horiLine}></div>
          {/* <Single_user />
          <Single_user />
          <Single_user />
          <Single_user />
          <Single_user /> */}

          {/* <div className={classes.container1}>
            <BsDiagram3Fill className={classes.iconBg} />

            <div className={classes.heading1}>Connections</div>
          </div>
          <div className={classes.container1}>
            <BsPeopleFill className={classes.iconBg} />

            <div className={classes.heading1}>Group</div>
          </div>
          <div className={classes.container1}>
            <BsCalendarPlusFill className={classes.iconBg} />

            <div className={classes.heading1}>Events</div>
          </div>
          <div className={classes.container1}>
            <BsPersonFill className={classes.iconBg} />

            <div className={classes.heading1}>Contacts</div>
          </div>
          <div className={classes.container1}>
            <BsFillFileEarmarkTextFill className={classes.iconBg} />

            <div className={classes.heading1}>Pages</div>
          </div> */}
{/* 
          <div className={classes.title}>Details</div>

          <div className={classes.container1}>
            <BsInfoCircleFill className={classes.iconBg} />

            <div className={classes.heading1}>About</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsFillFileRuledFill className={classes.iconBg} />

            <div className={classes.heading1}>Policy</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsShieldFill className={classes.iconBg} />

            <div className={classes.heading1}>Term and Condition</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsPatchQuestionFill className={classes.iconBg} />

            <div className={classes.heading1}>Help Center</div>
          </div>
          <div className={classes.horiLine}></div>

          <div className={classes.container1}>
            <BsGearFill className={classes.iconBg} />

            <div className={classes.heading1}>Setting</div>
          </div> */}


        </div>

        <div className={classes.leftBox}>
          <div className={classes.startPost}>
            <div className={classes.startPost_MarginDiv}>
              <img src={BibhuImg} className={classes.PosterImage} />
              <button type="button" className={classes.postbtn}>
                Write Post...
              </button>
            </div>

            {/* <div className={classes.bottomBtnContainer}>

            <div className={classes.imageContainer}>
              <BsFillImageFill className={classes.imgIcon} />

              <div className={classes.imageTitle}>Image</div>
            </div>

            <div className={classes.videoContainer}>
              <BsCameraVideoFill className={classes.videoIcon} />

              <div className={classes.videoTitle}>Video</div>
            </div>

            <div className={classes.eventContainer}>
              <BsCalendar2DayFill className={classes.eventIcon} />
              <div className={classes.eventTitle}>Event</div>
            </div>

            <div className={classes.articleContainer}>
              <BsPostcardFill className={classes.articleIcon} />
              <div className={classes.articleTitle}>Write Article</div>
            </div>
          </div> */}
          </div>

          <div className={classes.allpost}>
            <OnePost />
            <OnePost />
            <OnePost />
            <OnePost />
            <OnePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedContentDiv;
