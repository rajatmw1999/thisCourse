import React,{Component} from "react";
import "./cardHackrio.css";
import ScriptTag from 'react-script-tag';


class CardHackrio extends Component{
    render(){
        return(
            <div className="b">
                <ScriptTag type="text/javascript" src="./index.js" />
            <div className="home--hero-header hero--header-new">
                <div className="container">
                    <div className="customcontainerstyle_cardhackrio">
            <div className="row">
                <div className="col-xs-12 text-center hero-header-container">
                    
                    <div className="mobile-search-bar js-mobile-search-bar search-bar">
                        <div className="form-holder">
                            <div className="navbarSearch">
                                <span className="twitter-typeahead" style={{position:"relative",display:"inline-block"}}>
                                    <input
                                        
                                        className="form-control navbar-search-input js-navbar-search-input nav-input autocomplete-topics typeahead tt-input"
                                        type="text"
                                        placeholder="Search for the language you want to learn: "
                                        autocomplete="off"
                                        spellcheck="false"
                                        dir="auto"
                                        style={{"position":"relative","verticalAlign":"top"}}
                                        id="myInput1" onkeyup="myFunction1()"
                                    />
                                   
                                    <pre
                                        aria-hidden="true"
                                        style={{"position":"absolute","visibility":"hidden","whiteSpace":"pre","fontFamily":"'Helvetica Neue', Helvetica, Arial, sans-serif","fontSize":"18px","fontStyle":"normal","fontVariant":"normal","fontWeight":"400","wordSpacing":"0px","letterSpacing":"0px","textIndent":"0px","textRendering":"auto","textTransform":"none"}}
                                        
                                    ></pre>
                                    <div className="tt-menu" style={{"position":"absolute","top":"100%","left":"0px","zIndex":"100","display":"none"}}><div className="tt-dataset tt-dataset-courses"></div></div>
                                </span>
                            </div>
                            <img class="icon" src="https://hackr.io/assets/images/header-icons/search-header.svg" width="16" height="16" />
                        </div>
                    </div>
                    <div className="desktop-search-bar search-bar">
                        <div className="form-holder">
                            <div className="navbarSearch">
                                <input id="myInput" onkeyup="myFunction()" className="form-control navbar-search-input js-navbar-search-input nav-input js-filter-topics" type="text" placeholder="Search for the language you want to learn: " />
                            </div>
                            <img className="icon color-filter" src="https://hackr.io/assets/images/header-icons/search-header.svg" width="17" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        <div className="page--section paddingtop-sm marginbottom-lg margintop-md">
            <div className="container">
                <div className="customcontainerstyle_cardhackrio">
                <div className="row">
                    <div className="col-xs-12 no-paddingright-desktop">
                        <div className="page--body">
                            <div id="courses"  className="flex-grid hackr--flex-grid home--flex-grid js-topics-list">
                                <a href="https://hackr.io/tutorials/learn-python" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Python Tutorials and Courses" src="https://hackr.io/tutorials/python/logo-python.svg?ver=1562823957" />
                                    <p className="js-topic">Python</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-javascript" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="JavaScript Tutorials and Courses" src="https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1587977697" />
                                    <p className="js-topic">JavaScript</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-java" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Java Tutorials and Courses" src="https://hackr.io/tutorials/java/logo-java.svg?ver=1579862171" />
                                    <p className="js-topic">Java</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-android-development" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Android Development Tutorials and Courses" src="https://hackr.io/tutorials/android-development/logo-android-development.svg?ver=1587717128" />
                                    <p className="js-topic">Android Development</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-data-structures-algorithms" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Data Structures and Algorithms Tutorials and Courses" src="https://hackr.io/tutorials/data-structures-algorithms/logo-data-structures-algorithms.svg?ver=1587721467" />
                                    <p className="js-topic">Data Structures and Algorithms</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-c-plus-plus" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="C++ Tutorials and Courses" src="https://hackr.io/tutorials/c-plus-plus/logo-c-plus-plus.svg?ver=1579861999" />
                                    <p className="js-topic">C++</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-react" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="React Tutorials and Courses" src="https://hackr.io/tutorials/react/logo-react.svg?ver=1588062753" />
                                    <p className="js-topic">React</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-angular" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Angular Tutorials and Courses" src="https://hackr.io/tutorials/angular/logo-angular.svg?ver=1590863531" />
                                    <p className="js-topic">Angular</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-html-5" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="HTML 5 Tutorials and Courses" src="https://hackr.io/tutorials/html-5/logo-html-5.svg?ver=1587977020" />
                                    <p className="js-topic">HTML 5</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-c" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="C Tutorials and Courses" src="https://hackr.io/tutorials/c/logo-c.svg?ver=1553674176" />
                                    <p className="js-topic">C</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-node-js" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Node.js Tutorials and Courses" src="https://hackr.io/tutorials/node-js/logo-node-js.svg?ver=1590331795" />
                                    <p className="js-topic">Node.js</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-css" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="CSS Tutorials and Courses" src="https://hackr.io/tutorials/css/logo-css.svg?ver=1587721903" />
                                    <p className="js-topic">CSS</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-php" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="PHP Tutorials and Courses" src="https://hackr.io/tutorials/php/logo-php.svg?ver=1579862212" />
                                    <p className="js-topic">PHP</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-c-sharp" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="C# Tutorials and Courses" src="https://hackr.io/tutorials/c-sharp/logo-c-sharp.svg?ver=1587718651" />
                                    <p className="js-topic">C#</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-django" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Django Tutorials and Courses" src="https://hackr.io/tutorials/django/logo-django.svg?ver=1579862450" />
                                    <p className="js-topic">Django</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-information-security-ethical-hacking" className="topic-grid-item js-topic-grid-item">
                                    <img
                                        className="topic-thumbnail"
                                        alt="Information Security &amp; Ethical Hacking Tutorials and Courses"
                                        src="https://hackr.io/tutorials/information-security-ethical-hacking/logo-information-security-ethical-hacking.svg?ver=1587976807"
                                    />
                                    <p className="js-topic">Information Security &amp; Ethical Hacking</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-bootstrap" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Bootstrap Tutorials and Courses" src="https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097" />
                                    <p className="js-topic">Bootstrap</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-git" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Git Tutorials and Courses" src="https://hackr.io/tutorials/git/logo-git.svg?ver=1587724445" />
                                    <p className="js-topic">Git</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-mysql" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="MySQL Tutorials and Courses" src="https://hackr.io/tutorials/mysql/logo-mysql.svg?ver=1587981026" />
                                    <p className="js-topic">MySQL</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-sql" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="SQL Tutorials and Courses" src="https://hackr.io/tutorials/sql/logo-sql.svg?ver=1588063072" />
                                    <p className="js-topic">SQL</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-intro-to-programming" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Intro to Programming Tutorials and Courses" src="https://hackr.io/tutorials/intro-to-programming/logo-intro-to-programming.svg?ver=1587978368" />
                                    <p className="js-topic">Intro to Programming</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-jquery" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="jQuery Tutorials and Courses" src="https://hackr.io/tutorials/jquery/logo-jquery.svg?ver=1557130183" />
                                    <p className="js-topic">jQuery</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-blockchain" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Blockchain Programming Tutorials and Courses" src="https://hackr.io/tutorials/blockchain/logo-blockchain.svg?ver=1587106554" />
                                    <p className="js-topic">Blockchain Programming</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-unity" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Unity Tutorials and Courses" src="https://hackr.io/tutorials/unity/logo-unity.svg?ver=1579691365" />
                                    <p className="js-topic">Unity</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-react-native" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="React Native Tutorials and Courses" src="https://hackr.io/tutorials/react-native/logo-react-native.svg?ver=1588062724" />
                                    <p className="js-topic">React Native</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-arduino" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Arduino Tutorials and Courses" src="https://hackr.io/tutorials/arduino/logo-arduino.svg?ver=1551766080" />
                                    <p className="js-topic">Arduino</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-flutter" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Flutter Tutorials and Courses" src="https://hackr.io/tutorials/flutter/logo-flutter.svg?ver=1579862938" />
                                    <p className="js-topic">Flutter</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-vue-js" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Vue.js Tutorials and Courses" src="https://hackr.io/tutorials/vue-js/logo-vue-js.svg?ver=1555390471" />
                                    <p className="js-topic">Vue.js</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-ios-swift" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="iOS Swift Tutorials and Courses" src="https://hackr.io/tutorials/ios-swift/logo-ios-swift.svg?ver=1587978037" />
                                    <p className="js-topic">iOS Swift</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-kotlin" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Kotlin Tutorials and Courses" src="https://hackr.io/tutorials/kotlin/logo-kotlin.svg?ver=1555389603" />
                                    <p className="js-topic">Kotlin</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-golang" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Go Tutorials and Courses" src="https://hackr.io/tutorials/golang/logo-golang.svg?ver=1555401655" />
                                    <p className="js-topic">Go</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-typescript" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="TypeScript Tutorials and Courses" src="https://hackr.io/tutorials/typescript/logo-typescript.svg?ver=1588064696" />
                                    <p className="js-topic">TypeScript</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-bitcoin" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Bitcoin Tutorials and Courses" src="https://hackr.io/tutorials/bitcoin/logo-bitcoin.svg?ver=1587717623" />
                                    <p className="js-topic">Bitcoin</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-laravel" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Laravel Tutorials and Courses" src="https://hackr.io/tutorials/laravel/logo-laravel.svg?ver=1550762399" />
                                    <p className="js-topic">Laravel</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-asp-net" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="ASP.NET Tutorials and Courses" src="https://hackr.io/tutorials/asp-net/logo-asp-net.svg?ver=1555328015" />
                                    <p className="js-topic">ASP.NET</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-postgresql" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="PostgreSQL Tutorials and Courses" src="https://hackr.io/tutorials/postgresql/logo-postgresql.svg?ver=1555390079" />
                                    <p className="js-topic">PostgreSQL</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-redux" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Redux Tutorials and Courses" src="https://hackr.io/tutorials/redux/logo-redux.svg?ver=1551354757" />
                                    <p className="js-topic">Redux</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-java-spring-framework" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Java Spring Framework Tutorials and Courses" src="https://hackr.io/tutorials/java-spring-framework/logo-java-spring-framework.svg?ver=1555390385" />
                                    <p className="js-topic">Java Spring Framework</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-software-testing" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Software Testing Tutorials and Courses" src="https://hackr.io/tutorials/software-testing/logo-software-testing.svg?ver=1553834045" />
                                    <p className="js-topic">Software Testing</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-ruby-on-rails" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Ruby on Rails Tutorials and Courses" src="https://hackr.io/tutorials/ruby-on-rails/logo-ruby-on-rails.svg?ver=1588062348" />
                                    <p className="js-topic">Ruby on Rails</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-unreal-engine" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Unreal Engine Tutorials and Courses" src="https://hackr.io/tutorials/unreal-engine/logo-unreal-engine.svg?ver=1551354757" />
                                    <p className="js-topic">Unreal Engine</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-ruby" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Ruby Tutorials and Courses" src="https://hackr.io/tutorials/ruby/logo-ruby.svg?ver=1588062397" />
                                    <p className="js-topic">Ruby</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-visual-basic-net-vb" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Visual Basic .NET Tutorials and Courses" src="https://hackr.io/tutorials/visual-basic-net-vb/logo-visual-basic-net-vb.svg?ver=1551354757" />
                                    <p className="js-topic">Visual Basic .NET</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-scala" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Scala Tutorials and Courses" src="https://hackr.io/tutorials/scala/logo-scala.svg?ver=1588062152" />
                                    <p className="js-topic">Scala</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-elastic-search" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Elastic Search Tutorials and Courses" src="https://hackr.io/tutorials/elastic-search/logo-elastic-search.svg?ver=1583389547" />
                                    <p className="js-topic">Elastic Search</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-selenium" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Selenium Tutorials and Courses" src="https://hackr.io/tutorials/selenium/logo-selenium.svg?ver=1556099522" />
                                    <p className="js-topic">Selenium</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-google-analytics" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Google Analytics Tutorials and Courses" src="https://hackr.io/tutorials/google-analytics/logo-google-analytics.svg?ver=1587726244" />
                                    <p className="js-topic">Google Analytics</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-seo" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="SEO Tutorials and Courses" src="https://hackr.io/tutorials/seo/logo-seo.svg?ver=1550050459" />
                                    <p className="js-topic">SEO</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-xamarin" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Xamarin Tutorials and Courses" src="https://hackr.io/tutorials/xamarin/logo-xamarin.svg?ver=1588065225" />
                                    <p className="js-topic">Xamarin</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-ionic" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Ionic Tutorials and Courses" src="https://hackr.io/tutorials/ionic/logo-ionic.svg?ver=1587978084" />
                                    <p className="js-topic">Ionic</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-website-performance" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Website Performance Tutorials and Courses" src="https://hackr.io/tutorials/website-performance/logo-website-performance.svg?ver=1592914803" />
                                    <p className="js-topic">Website Performance</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-virtual-reality" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Virtual Reality Tutorials and Courses" src="https://hackr.io/tutorials/virtual-reality/logo-virtual-reality.svg?ver=1563364635" />
                                    <p className="js-topic">Virtual Reality</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-alexa-skills-kit-ask" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Alexa Skills Kit Tutorials and Courses" src="https://hackr.io/tutorials/alexa-skills-kit-ask/logo-alexa-skills-kit-ask.svg?ver=1554107807" />
                                    <p className="js-topic">Alexa Skills Kit</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-electron" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Electron Tutorials and Courses" src="https://hackr.io/tutorials/electron/logo-electron.svg?ver=1551354757" />
                                    <p className="js-topic">Electron</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-solidity" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Solidity Tutorials and Courses" src="https://hackr.io/tutorials/solidity/logo-solidity.svg?ver=1553831680" />
                                    <p className="js-topic">Solidity</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-growth-hacking" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Growth Hacking Tutorials and Courses" src="https://hackr.io/tutorials/growth-hacking/logo-growth-hacking.svg?ver=1587976317" />
                                    <p className="js-topic">Growth Hacking</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-elixir" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Elixir Tutorials and Courses" src="https://hackr.io/tutorials/elixir/logo-elixir.svg?ver=1579691321" />
                                    <p className="js-topic">Elixir</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-deno" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Deno Tutorials and Courses" src="https://hackr.io/tutorials/deno/logo-deno.svg?ver=1590289614" />
                                    <p className="js-topic">Deno</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-vhdl" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="VHDL Tutorials and Courses" src="https://hackr.io/tutorials/vhdl/logo-vhdl.svg?ver=1590509528" />
                                    <p className="js-topic">VHDL</p>
                                </a>
                                <a href="https://hackr.io/tutorials/learn-verilog" className="topic-grid-item js-topic-grid-item">
                                    <img className="topic-thumbnail" alt="Verilog Tutorials and Courses" src="https://hackr.io/tutorials/verilog/logo-verilog.svg?ver=1590508305" />
                                    <p className="js-topic">Verilog</p>
                                </a>
                              
                            </div>
                            <div id="no_topics_found" className="col-md-12 text-center hidden marginbottom-sm">
                                <span className="no-results"><em>Sorry, no results found!</em></span>
                                <p className="text-center margintop-md">We are a community-driven website. Please feel free to submit the courses/tutorials that you would want to recommend to the community.</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
            </div>
        </div>
            
        </div>

            </div>
        );
    }
}

export default CardHackrio;