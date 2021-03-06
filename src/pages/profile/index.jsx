import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Profile extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Profile'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/profile`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpg`,
            },
          ]}
        />
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              alt="xingwoo"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>@justxing</h1>
            <p className="lead text-muted">兴武</p>
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/justxing"
                className="twitter-follow-button"
                data-show-count="true"
              >
                Follow @justxing
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKILL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i className="devicon-html5-plain " data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="dot-NET"
                >
                  <i class="devicon-dot-net-plain-wordmark" />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="GIT"
                >
                  <i class="devicon-git-plain-wordmark" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Visutal studio"
                >
                  <i class="devicon-visualstudio-plain-wordmark" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="csharp"
                >
                  <i class="devicon-csharp-plain-wordmark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Current Job</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>
                  My name is Xing Woo and I am a software developer at The Learning Network.<br />
                  We are working with .NET Core applications and developing websites to sell books <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-white text-center color-inverse"
          id="concept"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">WORKS</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 slide-left" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work1.png'}
                  alt="work1"
                  className="rounded-circle mx-auto"
                />
                <p>The Learning Network</p>
              </div>
              <div className="col-md-6 slide-right" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work2.png'}
                  alt="work2"
                  className="rounded-circle mx-auto"
                />
                <p>Detector</p>
              </div>
            </div>
          </div>
        </section>

        <section id="repos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Websites</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  <a href="https://www.wokfouryou.nl" target="_blank">Wok Four You</a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={pathPrefix + '/img/work3.png'}
                  className="img-rounded img-responsive"
                  title=""
                  alt=""
                />
              </div>
              <div className="col-md-6 text-center align-middle">
                <h2 className="section-heading">My Works</h2>
                <p>Wok Four You</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
