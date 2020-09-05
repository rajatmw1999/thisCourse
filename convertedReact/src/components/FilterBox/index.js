import React, {Component} from "react";
import ReactDOM from 'react-dom';
import "./index.css";

class FilterBox extends React.Component {


    uncheckAll1() {
        var inputs = document.querySelectorAll('.provider');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
    }

    

    render() {
        return (
            <div className=" col-12">
            <div id="loginmodal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg" role="conent">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Filters</h4>
                            <button class="close" type="button" data-dismiss="modal" >
                            &times;
                            </button>
                        </div>
                        <form role="form" action='#' method="post">
                            <div class="modal-body">
                            <a href="" data-toggle="modal" data-target="#pricemodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                            <button type="button"  class="btn btn-link btn-block modaltags" id="price">Price<i class="fas fa-angle-right fa-lg" style={{float: 'right'}}></i></button>
                            </a>
                            <hr/>
                            <a href="" data-toggle="modal" data-target="#hourmodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                            <button type="button" class="btn btn-link btn-block modaltags" id="hour">Hours<i class="fas fa-angle-right fa-lg" style={{float: 'right'}}></i></button>
                            </a>
                            <hr/>
                            <a href="" data-toggle="modal" data-target="#providermodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                            <button type="button" class="btn btn-link btn-block modaltags" id="provider">Providers<i class="fas fa-angle-right fa-lg" style={{float: 'right'}}></i></button>
                            </a>
                            <hr/>
                            <a href="" data-toggle="modal" data-target="#languagemodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                            <button type="button" class="btn btn-link btn-block modaltags" id="language">Language<i class="fas fa-angle-right fa-lg" style={{float: 'right'}}></i></button>
                            </a>
                            <hr/>
                            <a href="" data-toggle="modal" data-target="#subtitlemodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                            <button type="button" class="btn btn-link btn-block modaltags" id="subtitle">Subtitles<i class="fas fa-angle-right fa-lg" style={{float: 'right'}}></i></button>
                            </a>
                            </div>
                            <div class="modal-footer">
                            <button type="button" onclick="uncheckAll4()" class="btn btn-link btn-sm" style={{color: 'red' }}id="signin">Clear all Filters</button>
                            <button type="button" class="btn btn-primary btn-sm" style={{ background:'#345DBB'}}data-dismiss="modal">Show Results</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            

            <div id="pricemodal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg" role="conent">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Filters</h4>
                        <button class="close" type="button" data-dismiss="modal">
                        &times;
                        </button>
                    </div>
                    <form role="form" action="#" method="post">
                        <div class="modal-body">
                        <div class="el:o-fieldset-frame__header">
                            <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">
                            Price
                            </legend>
                            <a
                            href="#"
                            onclick="uncheckAll5()"
                            class="el:o-fieldset-frame__action el:amx-Ws(nw)"
                            >
                            Clear
                            </a>
                        </div>

                        <div class="el:o-fieldset-frame__item">
                            <div class="col-sm-12">
                            <div id="slider-range1"></div>
                            </div>

                            <div class="row" style={{marginTop:'1em', display:'flex'}}>
                            <div class="col-4 caption" style={{border: '1px black'}}>
                                <span id="slider-range-value11"></span>
                            </div>

                            <span
                                class=" col-4 el:amx-D(ib)"
                                style={{margin:'auto 0em', fontSize:'0.875em', flexBasis:'150px', textAlign:'center'}}
                            >
                                in USD
                            </span>

                            <div class="col-4 text-right caption">
                                <span id="slider-range-value21"></span>
                            </div>

                            


                            <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        <span id=""><input type="text" placeholder="MIN"></input></span>
                                        </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        </div>

                                        <div class="col-4 text-right aradhna_filterinputbox">
                                        <span id=""><input type="text" placeholder="MAX"></input></span>
                                        </div>
                            

                            </div>
                        </div>
                        </div>
                        <div class="modal-footer">
                        <a href="" data-toggle="modal" data-target="#loginmodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                        <button
                            type="button"
                            id="okprice"
                            class="btn btn-primary btn-sm"
                            data-dismiss="modal"
                           style={{ background:'#345DBB'}}
                        >
                            Ok
                        </button>
                        </a>
                        </div>
                    </form>
                    </div>
                </div>
            </div> 
            

            <div id="hourmodal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg" role="conent">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Filters</h4>
                            <button class="close" type="button" data-dismiss="modal" >
                                &times;
                            </button>
                        </div>
                        <form role="form" action='#' method="post">
                        <div class="modal-body">
                            
                                <div class="el:o-fieldset-frame__header">
                                    <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Hours</legend>
                                    <a href="#" onclick="uncheckAll6()" class="filter-clear el:o-fieldset-frame__action el:amx-Ws(nw) " >
                                    Clear
                                    </a>
                                </div>


                                <div class="el:o-fieldset-frame__item" >
                                    <div class="col-sm-12">
                                    <div id="slider-range-hour1"></div>
                                    </div>
                                    
                                <div class="row" style={{marginTop:'1em', display:'flex'}} >
                                    
                                        
                                        <div  class="col-3 caption" style={{border: '1px black'}}>
                                                <span id="slider-range-hour-value11"></span>
                                            </div>
                                        
                                        
                                        <span class=" col-6 el:amx-D(ib)" style={{margin:'auto 0em',fontSize:'0.875em' ,flexBasis:'150px',textAlign:'center'}} >
                                                in Hours
                                            </span> 
                                        
                                        <div class="col-3 text-right caption">
                                            <span id="slider-range-hour-value21"></span>
                                            </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        <span id=""><input type="text" placeholder="MIN"></input></span>
                                        </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        </div>

                                        <div class="col-4 text-right aradhna_filterinputbox">
                                        <span id=""><input type="text" placeholder="MAX"></input></span>
                                        </div>
                                        
                                </div>
                            </div>
                                <div class="modal-footer">
                                <a href="" data-toggle="modal" data-target="#loginmodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                                    <button type="button" id="okhour" data-target="#loginmodal" style={{ background:'#345DBB'}} class="btn btn-primary btn-sm" data-dismiss="modal">Ok</button>
                                </a>
                                </div>
                        
                        </div>
                        </form>
                        

                    </div>

                </div>
            </div>

    <div id="providermodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="conent">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Filters</h4>
                    <button class="close" type="button" data-dismiss="modal" >
                        &times;
                    </button>
                </div>
                <form role="form" action='#' method="post">
                <div class="modal-body">
                    
                        <div class="el:o-fieldset-frame__header">
                            <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Providers</legend>
                             <a href="#" onclick="uncheckAll1()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                Clear
                            </a>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div class="el:m-search-suggest" >
                                <div id="suggestions.provider_name">
                                    
                                    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search providers" class="el:m-search-suggest__input"/>
                                    <div class="mx-D(n)">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div >
                                
                               
                                <ul id="providers">
                                    <li>
                                        <input class="provider" value="Apnacourse" type="checkbox" name="provider" id="checkbox1"/>
                                        <label class="checkbox-label" for="checkbox1">
                                            <span class="el:m-checkbox__label">
                                                <a>Apnacourse</a>
                                            <span class="el:m-checkbox__summary">
                                                (571)
                                            </span>
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="provider"  value="Arcademics" type="checkbox" name="provider" id="checkbox2"/>
                                        <label class="checkbox-label" for="checkbox2">
                                            <span class="el:m-checkbox__label">
                                                <a>Arcademics</a>
                                            <span class="el:m-checkbox__summary">
                                                (184)
                                            </span>
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="provider" type="checkbox" value="Bitdegree" name="provider" id="checkbox3"/>
                                        <label class="checkbox-label" for="checkbox3">
                                            <span class="el:m-checkbox__label"><a>Bitdegree</a><span class="el:m-checkbox__summary">
                                                (45)</span></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="provider" type="checkbox" value="Udemy" name="provider" id="checkbox4"/>
                                        <label class="checkbox-label" for="checkbox4">
                                            <span class="el:m-checkbox__label"><a>Udemy</a><span class="el:m-checkbox__summary">
                                                (33)</span></span>
                                        </label>
                                    </li>
                                    
                                                      
                                    <li>
                                        <input class="provider" type="checkbox" value="Coursera" name="provider" id="checkbox5"/>
                                        <label class="checkbox-label" for="checkbox5">
                                            <span class="el:m-checkbox__label"><a>Coursera</a><span class="el:m-checkbox__summary">
                                                (11)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="provider" type="checkbox" value="Digigrad" name="provider" id="checkbox6"/>
                                        <label class="checkbox-label" for="checkbox6">
                                            <span class="el:m-checkbox__label"><a>Digigrad</a><span class="el:m-checkbox__summary">
                                                (9)</span></span>
                                        </label>
                                    </li>
                                  
                                    <li>
                                        <input class="provider" type="checkbox" value="Skillshare" name="provider" id="checkbox7"/>
                                        <label class="checkbox-label" for="checkbox7">
                                            <span class="el:m-checkbox__label"><a>Skillshare</a><span class="el:m-checkbox__summary">
                                                (7)</span></span>
                                        </label>
                                    </li>
                                 
                                    <li>
                                        <input class="provider" type="checkbox" value="Harvard" name="provider" id="checkbox8"/>
                                        <label class="checkbox-label" for="checkbox8">
                                            <span class="el:m-checkbox__label"><a>Harvard</a><span class="el:m-checkbox__summary">
                                                (6)</span></span>
                                        </label>
                                    </li>
                                   
                               
                                    
                                    <li>
                                        <input class="provider" type="checkbox" value="OpenYale" name="provider" id="checkbox10"/>
                                        <label class="checkbox-label" for="checkbox10">
                                            <span class="el:m-checkbox__label"><a>OpenYale</a><span class="el:m-checkbox__summary">
                                                (5)</span></span>
                                        </label>
                                    </li>
                                   
                                    <li>
                                        <input class="provider" type="checkbox" value="Edx" name="provider" id="checkbox11"/>
                                        <label class="checkbox-label" for="checkbox11">
                                            <span class="el:m-checkbox__label"><a>Edx</a><span class="el:m-checkbox__summary">
                                                (4)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="provider" type="checkbox" value="Udacity" name="provider" id="checkbox12"/>
                                        <label class="checkbox-label" for="checkbox12">
                                            <span class="el:m-checkbox__label"><a>Udacity</a><span class="el:m-checkbox__summary">
                                                (2)</span></span>
                                        </label>
                                    </li>
                                  
                                    <li>
                                        <input class="provider" type="checkbox" value="Khan Academy" name="provider" id="checkbox13"/>
                                        <label class="checkbox-label" for="checkbox13">
                                            <span class="el:m-checkbox__label"><a>Khan Academy</a><span class="el:m-checkbox__summary">
                                                (2)</span></span>
                                        </label>
                                    </li>
                                   
                                    <li>
                                        <input class="provider" type="checkbox" value="Verbling" name="provider" id="checkbox14"/>
                                        <label class="checkbox-label" for="checkbox14">
                                            <span class="el:m-checkbox__label"><a>Verbling</a><span class="el:m-checkbox__summary">
                                                (1)</span></span>
                                        </label>
                                    </li>
                                    
                                  
                                </ul>
                            </div>
                        </div>
                  <div class="modal-footer">
                  <a href="" data-toggle="modal" data-target="#loginmodal" style={{ background:'#345DBB'}} data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                    <button type="button" id="okprovider" class="btn btn-primary btn-sm" data-dismiss="modal">Ok</button>
                    </a>
                  </div>
                  
                </div>
                </form>
            </div>

        </div>
    </div>

    <div id="languagemodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="conent">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Filters</h4>
                    <button class="close" type="button" data-dismiss="modal" >
                        &times;
                    </button>
                </div>
                <form role="form" action='#' method="post">
                <div class="modal-body">
                   
                        <div class="el:o-fieldset-frame__header">
                            <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Languages</legend>
                             <a href="#" onclick="uncheckAll2()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                Clear
                            </a>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div class="el:m-search-suggest" >
                                <div id="suggestions.provider_name">
                                    
                                    <input type="text" id="myInput2" onkeyup="myFunction2()" placeholder="Search Language" class="el:m-search-suggest__input"/>
                                    <div class="mx-D(n)">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div >
                                
                               
                                <ul id="languages">
                                    <li>
                                        <input class="language" value="English" type="checkbox" name="language" id="language1"/>
                                        <label class="checkbox-label" for="language1">
                                            <span class="el:m-checkbox__label">
                                                <a>English</a>
                                            <span class="el:m-checkbox__summary">
                                                (717)
                                            </span>
                                            </span>
                                        </label>
                                    </li>

                                    <li>
                                        
                                        <label class="checkbox-label" for="language2">
                                            <input class="language"  value="Spanish" type="checkbox" name="language" id="language2"/>
                                            <span class="el:m-checkbox__label">
                                                <a>Spanish</a>
                                            <span class="el:m-checkbox__summary">
                                                (90)
                                            </span>
                                            </span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="language" type="checkbox" value="Portuguese" name="language" id="language3"/>
                                        <label class="checkbox-label" for="language3">
                                            <span class="el:m-checkbox__label"><a>Portuguese</a><span class="el:m-checkbox__summary">
                                                (56)</span></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="language" type="checkbox" value="French" name="language" id="language4"/>
                                        <label class="checkbox-label" for="language4">
                                            <span class="el:m-checkbox__label"><a>French</a><span class="el:m-checkbox__summary">
                                                (19)</span></span>
                                        </label>
                                    </li>
                                    
                                                      
                                    <li>
                                        <input class="language" type="checkbox" value="Turkish" name="language" id="language5"/>
                                        <label class="checkbox-label" for="language5">
                                            <span class="el:m-checkbox__label"><a>Turkish</a><span class="el:m-checkbox__summary">
                                                (14)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="language" type="checkbox" value="Italian" name="language" id="language6"/>
                                        <label class="checkbox-label" for="language6">
                                            <span class="el:m-checkbox__label"><a>Italian</a><span class="el:m-checkbox__summary">
                                                (13)</span></span>
                                        </label>
                                    </li>
                                  
                                    <li>
                                        <input class="language" type="checkbox" value="Thai" name="language" id="language7"/>
                                        <label class="checkbox-label" for="language7">
                                            <span class="el:m-checkbox__label"><a>Thai</a><span class="el:m-checkbox__summary">
                                                (9)</span></span>
                                        </label>
                                    </li>
                                 
                                    <li>
                                        <input class="language" type="checkbox" value="Polish" name="language" id="language8"/>
                                        <label class="checkbox-label" for="language8">
                                            <span class="el:m-checkbox__label"><a>Polish</a><span class="el:m-checkbox__summary">
                                                (8)</span></span>
                                        </label>
                                    </li>
                                   
                                    <li>
                                        <input class="language" type="checkbox" value="Chinese" name="language" id="language9"/>
                                        <label class="checkbox-label" for="language9">
                                            <span class="el:m-checkbox__label"><a>Chinese</a><span class="el:m-checkbox__summary">
                                                (7)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="language" type="checkbox" value="German" name="language" id="language10"/>
                                        <label class="checkbox-label" for="language10">
                                            <span class="el:m-checkbox__label"><a>German</a><span class="el:m-checkbox__summary">
                                                (4)</span></span>
                                        </label>
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                        </div>
                  <div class="modal-footer">
                  <a href="" data-toggle="modal" data-target="#loginmodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                    <button type="button" id="oklanguage" style={{ background:'#345DBB'}} class="btn btn-primary btn-sm" data-dismiss="modal">Ok</button>
                    </a>
                  </div>
                  
                </div>
                </form>
            </div>

        </div>
    </div>

    <div id="subtitlemodal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="conent">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Filters</h4>
                    <button class="close" type="button" data-dismiss="modal" >
                        &times;
                    </button>
                </div>
                <form role="form" action='#' method="post">
                <div class="modal-body">
                    
                        <div class="el:o-fieldset-frame__header">
                            <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Subtitles</legend>
                             <a href="#" onclick="uncheckAll3()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                Clear
                            </a>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div class="el:m-search-suggest" >
                                <div id="suggestions.provider_name">
                                    
                                    <input type="text" id="myInput3" onkeyup="myFunction3()" placeholder="Search Subtitles.." class="el:m-search-suggest__input"/>
                                    <div class="mx-D(n)">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="el:o-fieldset-frame__item" >
                            <div >
                                
                               
                                <ul id="subtitles">
                                    <li>
                                        <input class="subtitle" value="English (US)" type="checkbox" name="subtitle" id="subtitle1"/>
                                        <label class="checkbox-label" for="subtitle1">
                                            <a><span class="el:m-checkbox__label">
                                                English (US)
                                            <span class="el:m-checkbox__summary">
                                                (717)
                                            </span>
                                            </span>
                                        </a>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="subtitle"  value="English" type="checkbox" name="subtitle" id="subtitle2"/>
                                        <label class="checkbox-label" for="subtitle2">
                                            <a><span class="el:m-checkbox__label">
                                                English
                                            <span class="el:m-checkbox__summary">
                                                (262)
                                            </span>
                                            </span></a>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Spanish" name="subtitle" id="subtitle3"/>
                                        <label class="checkbox-label" for="subtitle3">
                                            <span class="el:m-checkbox__label"><a>Spanish</a><span class="el:m-checkbox__summary">
                                                (87)</span></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Portuguese" name="subtitle" id="subtitle4"/>
                                        <label class="checkbox-label" for="subtitle4">
                                            <span class="el:m-checkbox__label"><a>Portuguese</a><span class="el:m-checkbox__summary">
                                                (79)</span></span>
                                        </label>
                                    </li>
                                    
                                                      
                                    <li>
                                        <input class="subtitle" type="checkbox" value="French" name="subtitle" id="subtitle5"/>
                                        <label class="checkbox-label" for="subtitle5">
                                            <span class="el:m-checkbox__label"><a>French</a><span class="el:m-checkbox__summary">
                                                (75)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Bulgarian" name="subtitle" id="subtitle6"/>
                                        <label class="checkbox-label" for="subtitle6">
                                            <span class="el:m-checkbox__label"><a>Bulgarian</a><span class="el:m-checkbox__summary">
                                                (75)</span></span>
                                        </label>
                                    </li>
                                  
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Thai" name="subtitle" id="subtitle7"/>
                                        <label class="checkbox-label" for="subtitle7">
                                            <span class="el:m-checkbox__label"><a>Thai</a><span class="el:m-checkbox__summary">
                                                (9)</span></span>
                                        </label>
                                    </li>
                                 
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Polish" name="subtitle" id="subtitle8"/>
                                        <label class="checkbox-label" for="subtitle8">
                                            <span class="el:m-checkbox__label"><a>Polish</a><span class="el:m-checkbox__summary">
                                                (74)</span></span>
                                        </label>
                                    </li>
                                   
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Georgian" name="subtitle" id="subtitle9"/>
                                        <label class="checkbox-label" for="subtitle9">
                                            <span class="el:m-checkbox__label"><a>Georgian</a><span class="el:m-checkbox__summary">
                                                (74)</span></span>
                                        </label>
                                    </li>
                                    
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Italian" name="subtitle" id="subtitle10"/>
                                        <label class="checkbox-label" for="subtitle10">
                                            <span class="el:m-checkbox__label"><a>Italian</a><span class="el:m-checkbox__summary">
                                                (74)</span></span>
                                        </label>
                                    </li>
                                    <li>
                                        <input class="subtitle" type="checkbox" value="Danish" name="subtitle" id="subtitle11"/>
                                        <label class="checkbox-label" for="subtitle11">
                                            <span class="el:m-checkbox__label"><a>Danish</a><span class="el:m-checkbox__summary">
                                                (74)</span></span>
                                        </label>
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                        </div>
                  <div class="modal-footer">
                  <a href="" data-toggle="modal" data-target="#loginmodal"  data-dismiss="modal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                    <button type="button" id="oksubtitle" style={{ background:'#345DBB'}} class="btn btn-primary btn-sm" data-dismiss="modal">Ok</button>
                    </a>
                  </div>
                 
                </div>
                </form>
            </div>

        </div>
    </div>


{/* <div data-v-7cc4708a="">
    

    <div class="container el:amx-Pb(3.75em)" data-v-7cc4708a="">
        
        <div class="row el:amx-Mt(1em)@>lg el:amx-Mb(2em)" data-v-7cc4708a=""> */}
            <div class="el:amx-D(n)@<sm "  data-v-7cc4708a="">
                <div class="filter-nav" data-v-7cc4708a="" style={{border :"1px solid #ccc"}}>
                    <div class="el:amx-D(F) el:amx-FxJc(sb)" data-v-7cc4708a="">
                        <h4 class="filter" data-v-7cc4708a="">Filters</h4>  
                        <a href="#" onclick="uncheckAll4()" class="filter-clear el:amx-C_er el:amx-Fw(b) el:amx-Fs(0.625em)" style={{margin: 'auto 0', textAlign: 'right'}} data-v-7cc4708a="">
                      Clear all filters
                    </a>
                    <button href="#" class="btn btn-block" style={{backgroundColor: 'lightblue'}} >
                      Apply Filters
                    </button>
                   
                    </div>
                    <form  data-v-7cc4708a="">
                        <hr />
                        <fieldset class="el:o-fieldset-frame" >
                            <div class="el:o-fieldset-frame__header">
                                <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Price</legend>
                                 <a href="#" onclick="uncheckAll5()" class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                Clear
                                </a>
                            </div>
                            
                            <div class="priceslider el:o-fieldset-frame__item" >
                                 <div class="col-sm-12">
                                    <div id="slider-range" ></div>
                                  </div>
                                  
                                <div class="row" style={{marginTop:'1em', display:'flex'}} >
                                    
                                        
                                        <div class="col-4 caption" style={{border: '1px black'}}>
                                             <span id="slider-range-value1"></span>
                                          </div>
                                        
                                        
                                     <span class="col-4 el:amx-D(ib)" style={{margin:'auto 0em',fontSize:'0.875em' ,flexBasis:'150px',textAlign:'center'}} >
                                                in USD
                                            </span> 
                                        
                                        <div class="col-4 text-right caption">
                                           <span id="slider-range-value2"></span>
                                          </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        <span id=""><input type="text" placeholder="MIN"></input></span>
                                        </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        </div>

                                        <div class="col-4 text-right aradhna_filterinputbox">
                                        <span id=""><input type="text" placeholder="MAX"></input></span>
                                        </div>
                                          
                                        
                                </div>
                            </div>
                        
                            


                        </fieldset>
                        <hr />

                        <fieldset class="el:o-fieldset-frame" >
                            <div class="el:o-fieldset-frame__header">
                                <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Hours</legend>
                                 <a href="#" onclick="uncheckAll6()" class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                <span>Clear</span>
                                </a>
                            </div>


                            {/* <!-- no of hours --> */}
                            <div class="el:o-fieldset-frame__item" >
                                <div class="col-sm-12">
                                   <div id="slider-range-hour"></div>
                                 </div>
                                 
                               <div class="row" style={{marginTop:'1em', display:'flex'}} >
                                   
                                       
                                       <div class="col-3 caption" style={{border: '1px black'}}>
                                            <span id="slider-range-hour-value1"></span>
                                         </div>
                                       
                                       
                                    <span class="col-6 el:amx-D(ib)" style={{margin:'auto 0em',fontSize:'0.875em' ,flexBasis:'150px',textAlign:'center'}} >
                                               in Hours
                                           </span> 
                                       
                                       <div class="col-3 text-right caption">
                                          <span id="slider-range-hour-value2"></span>
                                         </div>


                                         <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        <span id=""><input type="text" placeholder="MIN"></input></span>
                                        </div>

                                        <div class="col-4 aradhna_filterinputbox" style={{border: '1px black'}}>
                                        </div>

                                        <div class="col-4 text-right aradhna_filterinputbox">
                                        <span id=""><input type="text" placeholder="MAX"></input></span>
                                        </div>
                               </div>
                           </div>


                        </fieldset>

                        <hr />

                        <fieldset class="el:o-fieldset-frame" >
                            <div class="el:o-fieldset-frame__header">
                                <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Providers</legend>
                                 <a href="#" onclick="uncheckAll1()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                    Clear
                                </a>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div class="el:m-search-suggest" >
                                    <div id="suggestions.provider_name">
                                        
                                        <input type="text" id="myInput1" onkeyup="myFunction1()" placeholder="Search providers" class="el:m-search-suggest__input"/>
                                        <div class="mx-D(n)">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div >
                                    
                                   
                                    <ul id="providerss">
                                        <li>
                                            <input class="provider" value="Apnacourse" type="checkbox" name="provider" id="checkbox1"/>
                                            <label class="checkbox-label" for="checkbox1">
                                                <span class="el:m-checkbox__label">
                                                    <a>Apnacourse</a>
                                                <span class="el:m-checkbox__summary">
                                                    (571)
                                                </span>
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="provider"  value="Arcademics" type="checkbox" name="provider" id="checkbox2"/>
                                            <label class="checkbox-label" for="checkbox2">
                                                <span class="el:m-checkbox__label">
                                                    <a>Arcademics</a>
                                                <span class="el:m-checkbox__summary">
                                                    (184)
                                                </span>
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="provider" type="checkbox" value="Bitdegree" name="provider" id="checkbox3"/>
                                            <label class="checkbox-label" for="checkbox3">
                                                <span class="el:m-checkbox__label"><a>Bitdegree</a><span class="el:m-checkbox__summary">
                                                    (45)</span></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="provider" type="checkbox" value="Udemy" name="provider" id="checkbox4"/>
                                            <label class="checkbox-label" for="checkbox4">
                                                <span class="el:m-checkbox__label"><a>Udemy</a><span class="el:m-checkbox__summary">
                                                    (33)</span></span>
                                            </label>
                                        </li>
                                        
                                                          
                                        <li>
                                            <input class="provider" type="checkbox" value="Coursera" name="provider" id="checkbox5"/>
                                            <label class="checkbox-label" for="checkbox5">
                                                <span class="el:m-checkbox__label"><a>Coursera</a><span class="el:m-checkbox__summary">
                                                    (11)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="provider" type="checkbox" value="Digigrad" name="provider" id="checkbox6"/>
                                            <label class="checkbox-label" for="checkbox6">
                                                <span class="el:m-checkbox__label"><a>Digigrad</a><span class="el:m-checkbox__summary">
                                                    (9)</span></span>
                                            </label>
                                        </li>
                                      
                                        <li>
                                            <input class="provider" type="checkbox" value="Edx" name="provider" id="checkbox7"/>
                                            <label class="checkbox-label" for="checkbox7">
                                                <span class="el:m-checkbox__label"><a>Edx </a><span class="el:m-checkbox__summary">
                                                    (7)</span></span>
                                            </label>
                                        </li>
                                     
                                        <li>
                                            <input class="provider" type="checkbox" value="Harvard" name="provider" id="checkbox8"/>
                                            <label class="checkbox-label" for="checkbox8">
                                                <span class="el:m-checkbox__label"><a>Harvard </a><span class="el:m-checkbox__summary">
                                                    (6)</span></span>
                                            </label>
                                        </li>
                                       
                                     
                                        <li>
                                            <input class="provider" type="checkbox" value="OpenYale" name="provider" id="checkbox10"/>
                                            <label class="checkbox-label" for="checkbox10">
                                                <span class="el:m-checkbox__label"><a>OpenYale </a><span class="el:m-checkbox__summary">
                                                    (5)</span></span>
                                            </label>
                                        </li>
                                       
                                        <li>
                                            <input class="provider" type="checkbox" value="Skillshare" name="provider" id="checkbox11"/>
                                            <label class="checkbox-label" for="checkbox11">
                                                <span class="el:m-checkbox__label"><a>Skillshare </a><span class="el:m-checkbox__summary">
                                                    (4)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="provider" type="checkbox" value="Udacity" name="provider" id="checkbox12"/>
                                            <label class="checkbox-label" for="checkbox12">
                                                <span class="el:m-checkbox__label"><a>Udacity</a><span class="el:m-checkbox__summary">
                                                    (2)</span></span>
                                            </label>
                                        </li>
                                      
                                        <li>
                                            <input class="provider" type="checkbox" value="Khan Academy" name="provider" id="checkbox13"/>
                                            <label class="checkbox-label" for="checkbox13">
                                                <span class="el:m-checkbox__label"><a>Khan Academy</a><span class="el:m-checkbox__summary">
                                                    (2)</span></span>
                                            </label>
                                        </li>
                                       
                                        <li>
                                            <input class="provider" type="checkbox" value="Verbling" name="provider" id="checkbox14"/>
                                            <label class="checkbox-label" for="checkbox14">
                                                <span class="el:m-checkbox__label"><a>Verbling</a><span class="el:m-checkbox__summary">
                                                    (1)</span></span>
                                            </label>
                                        </li>
                                        
                                       
                                    </ul>
                                </div>
                            </div>
                        </fieldset>

                        <hr />

                        <fieldset class="el:o-fieldset-frame" >
                            <div class="el:o-fieldset-frame__header">
                                <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Languages</legend>
                                 <a href="#" onclick="uncheckAll2()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                    Clear
                                </a>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div class="el:m-search-suggest" >
                                    <div id="suggestions.provider_name">
                                        
                                        <input type="text" id="myInput21" onkeyup="myFunction21()" placeholder="Search Language" class="el:m-search-suggest__input"/>
                                        <div class="mx-D(n)">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div >
                                    
                                   
                                    <ul id="languagess">
                                        <li>
                                            <input class="language" value="English" type="checkbox" name="language" id="language1"/>
                                            <label class="checkbox-label" for="language1">
                                                <span class="el:m-checkbox__label">
                                                    <a>English</a>
                                                <span class="el:m-checkbox__summary">
                                                    (717)
                                                </span>
                                                </span>
                                            </label>
                                        </li>

                                        <li>
                                            
                                            <label class="checkbox-label" for="language2">
                                                <input class="language"  value="Spanish" type="checkbox" name="language" id="language2"/>
                                                <span class="el:m-checkbox__label">
                                                    <a>Spanish</a>
                                                <span class="el:m-checkbox__summary">
                                                    (90)
                                                </span>
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="language" type="checkbox" value="Portuguese" name="language" id="language3"/>
                                            <label class="checkbox-label" for="language3">
                                                <span class="el:m-checkbox__label"><a>Portuguese</a><span class="el:m-checkbox__summary">
                                                    (56)</span></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="language" type="checkbox" value="French" name="language" id="language4"/>
                                            <label class="checkbox-label" for="language4">
                                                <span class="el:m-checkbox__label"><a>French</a><span class="el:m-checkbox__summary">
                                                    (19)</span></span>
                                            </label>
                                        </li>
                                        
                                                          
                                        <li>
                                            <input class="language" type="checkbox" value="Turkish" name="language" id="language5"/>
                                            <label class="checkbox-label" for="language5">
                                                <span class="el:m-checkbox__label"><a>Turkish</a><span class="el:m-checkbox__summary">
                                                    (14)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="language" type="checkbox" value="Italian" name="language" id="language6"/>
                                            <label class="checkbox-label" for="language6">
                                                <span class="el:m-checkbox__label"><a>Italian</a><span class="el:m-checkbox__summary">
                                                    (13)</span></span>
                                            </label>
                                        </li>
                                      
                                        <li>
                                            <input class="language" type="checkbox" value="Thai" name="language" id="language7"/>
                                            <label class="checkbox-label" for="language7">
                                                <span class="el:m-checkbox__label"><a>Thai</a><span class="el:m-checkbox__summary">
                                                    (9)</span></span>
                                            </label>
                                        </li>
                                     
                                        <li>
                                            <input class="language" type="checkbox" value="Polish" name="language" id="language8"/>
                                            <label class="checkbox-label" for="language8">
                                                <span class="el:m-checkbox__label"><a>Polish</a><span class="el:m-checkbox__summary">
                                                    (8)</span></span>
                                            </label>
                                        </li>
                                       
                                        <li>
                                            <input class="language" type="checkbox" value="Chinese" name="language" id="language9"/>
                                            <label class="checkbox-label" for="language9">
                                                <span class="el:m-checkbox__label"><a>Chinese</a><span class="el:m-checkbox__summary">
                                                    (7)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="language" type="checkbox" value="German" name="language" id="language10"/>
                                            <label class="checkbox-label" for="language10">
                                                <span class="el:m-checkbox__label"><a>German</a><span class="el:m-checkbox__summary">
                                                    (4)</span></span>
                                            </label>
                                        </li>
                                       
                                        
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                        
                        <hr />

                        <fieldset class="el:o-fieldset-frame" >
                            <div class="el:o-fieldset-frame__header">
                                <legend class="el:o-fieldset-frame__title el:o-fieldset-frame__title--stand-out">Subtitles</legend>
                                 <a href="#" onclick="uncheckAll3()"  class="el:o-fieldset-frame__action el:amx-Ws(nw)" >
                                    Clear
                                </a>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div class="el:m-search-suggest" >
                                    <div id="suggestions.provider_name">
                                        
                                        <input type="text" id="myInput31" onkeyup="myFunction31()" placeholder="Search Subtitles.." class="el:m-search-suggest__input"/>
                                        <div class="mx-D(n)">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="el:o-fieldset-frame__item" >
                                <div >
                                    
                                   
                                    <ul id="subtitless">
                                        <li>
                                            <input class="subtitle" value="English (US)" type="checkbox" name="subtitle" id="subtitle1"/>
                                            <label class="checkbox-label" for="subtitle1">
                                                <a><span class="el:m-checkbox__label">
                                                    English (US)
                                                <span class="el:m-checkbox__summary">
                                                    (717)
                                                </span>
                                                </span>
                                            </a>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="subtitle"  value="English" type="checkbox" name="subtitle" id="subtitle2"/>
                                            <label class="checkbox-label" for="subtitle2">
                                                <a><span class="el:m-checkbox__label">
                                                    English
                                                <span class="el:m-checkbox__summary">
                                                    (262)
                                                </span>
                                                </span></a>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Spanish" name="subtitle" id="subtitle3"/>
                                            <label class="checkbox-label" for="subtitle3">
                                                <span class="el:m-checkbox__label"><a>Spanish</a><span class="el:m-checkbox__summary">
                                                    (87)</span></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Portuguese" name="subtitle" id="subtitle4"/>
                                            <label class="checkbox-label" for="subtitle4">
                                                <span class="el:m-checkbox__label"><a>Portuguese</a><span class="el:m-checkbox__summary">
                                                    (79)</span></span>
                                            </label>
                                        </li>
                                        
                                                          
                                        <li>
                                            <input class="subtitle" type="checkbox" value="French" name="subtitle" id="subtitle5"/>
                                            <label class="checkbox-label" for="subtitle5">
                                                <span class="el:m-checkbox__label"><a>French</a><span class="el:m-checkbox__summary">
                                                    (75)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Bulgarian" name="subtitle" id="subtitle6"/>
                                            <label class="checkbox-label" for="subtitle6">
                                                <span class="el:m-checkbox__label"><a>Bulgarian</a><span class="el:m-checkbox__summary">
                                                    (75)</span></span>
                                            </label>
                                        </li>
                                      
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Thai" name="subtitle" id="subtitle7"/>
                                            <label class="checkbox-label" for="subtitle7">
                                                <span class="el:m-checkbox__label"><a>Thai</a><span class="el:m-checkbox__summary">
                                                    (9)</span></span>
                                            </label>
                                        </li>
                                     
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Polish" name="subtitle" id="subtitle8"/>
                                            <label class="checkbox-label" for="subtitle8">
                                                <span class="el:m-checkbox__label"><a>Polish</a><span class="el:m-checkbox__summary">
                                                    (74)</span></span>
                                            </label>
                                        </li>
                                       
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Georgian" name="subtitle" id="subtitle9"/>
                                            <label class="checkbox-label" for="subtitle9">
                                                <span class="el:m-checkbox__label"><a>Georgian</a><span class="el:m-checkbox__summary">
                                                    (74)</span></span>
                                            </label>
                                        </li>
                                        
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Italian" name="subtitle" id="subtitle10"/>
                                            <label class="checkbox-label" for="subtitle10">
                                                <span class="el:m-checkbox__label"><a>Italian</a><span class="el:m-checkbox__summary">
                                                    (74)</span></span>
                                            </label>
                                        </li>
                                        <li>
                                            <input class="subtitle" type="checkbox" value="Danish" name="subtitle" id="subtitle11"/>
                                            <label class="checkbox-label" for="subtitle11">
                                                <span class="el:m-checkbox__label"><a>Danish</a><span class="el:m-checkbox__summary">
                                                    (74)</span></span>
                                            </label>
                                        </li>
                                       
                                        
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                        
                    </form>
                   
                </div>
            </div>
            <div class="col-12 el:amx-D(n)@>lg el:amx-Mb(1em)" data-v-7cc4708a="">
                <hr data-v-7cc4708a=""/>
                <div class="el:amx-D(F) el:amx-FxJc(sb) el:amx-FxAi(c)" data-v-7cc4708a=""><span class="el:amx-C_gray5 el:amx-Fw(b)" data-v-7cc4708a=""><span class="el:amx-D(ib) el:amx-Mr(0.25em)" data-v-7cc4708a="">Sort by</span> 
                    <div class="el:m-select el:amx-D(ib)" data-v-7cc4708a="">
                        <select value="rel" class="el:amx-Fs(0.75em)" style={{width: '130px'}} data-v-7cc4708a="">
                            <option value="rel" data-v-7cc4708a="">Relevance</option>
                            <option value="price.asc" data-v-7cc4708a="">Lowest price</option>
                            <option value="price.desc" data-v-7cc4708a="">Highest price</option>
                        </select>
                    </div>
                    
                    </span> <a href="" data-toggle="modal" data-target="#loginmodal" class="el:amx-C_pr el:amx-Fw(b) el:amx-Ws(nw)" data-v-7cc4708a="">
                    Filter results
                  </a>
                </div>
            </div>

          
           
         </div>
//     </div>
// </div>
//             </div>
        );
    }
}

export default FilterBox;