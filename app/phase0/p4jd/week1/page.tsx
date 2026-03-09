'use client';

import Image from "next/image";
import Tabs from '@/components/client/Tabs';
import Tab2 from '@/components/client/Tab2';
import TileRowCell0 from '@/components/client/TileRowCell0';
import { MathJaxContext } from "better-react-mathjax";
import React, { useEffect } from 'react';


export default function Home() {

        useEffect(() => {
                // Check if MathJax is loaded and available in the window object
                if (typeof window?.MathJax !== "undefined") {
                        window.MathJax.typeset(); // Triggers typesetting
                }
        }, []); // Run once on component mount

        const html = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== basics ============================ '</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># indentation is important</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== loops ============================ '</span>)
                </div><span class="im"><br>
                        <div><span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(156,220,254)">i</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(78,201,176)">range</span>(<span
                                        style="color:rgb(181,206,168)">5</span>): &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp;<span style="color:rgb(106,153,85)"># range is a built in function similar to an
                                        iterator</span></div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">"For loop"</span>, <span
                                        style="color:rgb(156,220,254)">i</span>) &nbsp; &nbsp;<span
                                        style="color:rgb(106,153,85)"># better way to print in a loop</span></div><br>
                        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                        <div><span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(156,220,254)">i</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(78,201,176)">range</span>(<span
                                        style="color:rgb(181,206,168)">4</span>, <span
                                        style="color:rgb(181,206,168)">10</span>, <span
                                        style="color:rgb(181,206,168)">2</span>): &nbsp; <span
                                        style="color:rgb(106,153,85)"># equivalent to: i=4; i+2; i&lt;10 &nbsp; ie.
                                        start with 4, up to (but not including) 10, step size is 2</span></div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">"For loop"</span>, <span
                                        style="color:rgb(156,220,254)">i</span>)</div><br>
                        <div><span style="color:rgb(220,220,170)">print</span>()</div><br>
                        <div><span style="color:rgb(197,134,192)">for</span> <span
                                        style="color:rgb(156,220,254)">i</span> <span
                                        style="color:rgb(197,134,192)">in</span> <span
                                        style="color:rgb(78,201,176)">range</span>(<span
                                        style="color:rgb(181,206,168)">3</span>, <span
                                        style="color:rgb(212,212,212)">-</span><span
                                        style="color:rgb(181,206,168)">1</span>, <span
                                        style="color:rgb(212,212,212)">-</span><span
                                        style="color:rgb(181,206,168)">1</span>): &nbsp;<span
                                        style="color:rgb(106,153,85)"># use step size of -1 to count backwards</span>
                        </div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">"For loop"</span>, <span
                                        style="color:rgb(156,220,254)">i</span>)</div><br><br>
                        <div><span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">'</span><span
                                        style="color:rgb(215,186,125)">\n</span><span
                                        style="color:rgb(206,145,120)">=====================<wbr>==== while loops ============================ '</span>)
                        </div><br>
                        <div><span style="color:rgb(156,220,254)">value</span> <span
                                        style="color:rgb(212,212,212)">=</span> <span
                                        style="color:rgb(181,206,168)">0</span></div><br>
                        <div><span style="color:rgb(197,134,192)">while</span> <span
                                        style="color:rgb(156,220,254)">value</span> <span
                                        style="color:rgb(212,212,212)">&lt;</span> <span
                                        style="color:rgb(181,206,168)">5</span>:</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">value</span> <span
                                        style="color:rgb(212,212,212)">+=</span> <span
                                        style="color:rgb(181,206,168)">1</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># there is no ++ operator
                                        in python</span></div><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                        style="color:rgb(156,220,254)">value</span> <span
                                        style="color:rgb(212,212,212)">==</span> <span
                                        style="color:rgb(181,206,168)">2</span>:</div>
                        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">continue</span> &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                                        can also use break but note that if you use break the else </span></div>
                </span>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># statement will not be executed</span></div>
                <span class="im"><br>
                        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">"While"</span>, <span
                                        style="color:rgb(156,220,254)">value</span>)</div><br>
                        <div><span style="color:rgb(197,134,192)">else</span>:</div>
                        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                        style="color:rgb(206,145,120)">"Finished"</span>)</div><br><br>
                </span>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== operators ============================ '</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># +, -, *, / (floating point divide), // (integer divide), %
                                (mod), ** (exponent)</span></div>
                <div><span style="color:rgb(106,153,85)"># int, float, str</span></div>
                <div><span style="color:rgb(106,153,85)"># =, ==</span></div><br>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"24"</span>
                </div>
                <div><span style="color:rgb(156,220,254)">dozen</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">int</span>(<span
                                style="color:rgb(156,220,254)">value</span>) <span
                                style="color:rgb(212,212,212)">//</span> <span style="color:rgb(181,206,168)">12</span>
                        &nbsp;<span style="color:rgb(106,153,85)"># perform an integer divide (not a float divide) and
                                cast the string value to an int. Integer divide will just discard the remainder. </span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">value</span>
                        <span style="color:rgb(212,212,212)">+</span> <span style="color:rgb(206,145,120)">" is
                                equivalent to "</span> <span style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(78,201,176)">str</span>(<span
                                style="color:rgb(156,220,254)">dozen</span>) <span
                                style="color:rgb(212,212,212)">+</span> <span style="color:rgb(206,145,120)">"
                                dozen."</span>) &nbsp; <span style="color:rgb(106,153,85)"># cast the int dozen to a
                                string</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== string comparison ============================ '</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Cat"</span>
                        <span style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(206,145,120)">"cat"</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Cat"</span>.<span
                                style="color:rgb(220,220,170)">lower</span>() <span
                                style="color:rgb(212,212,212)">==</span> <span
                                style="color:rgb(206,145,120)">"cat"</span>.<span
                                style="color:rgb(220,220,170)">lower</span>())</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"cat"</span>
                        <span style="color:rgb(212,212,212)">&gt;</span> <span
                                style="color:rgb(206,145,120)">"Dog"</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                upper-case comes before lower-case in unicode</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">ord</span>(<span
                                style="color:rgb(206,145,120)">"c"</span>)) <span style="color:rgb(106,153,85)"># print
                                unicode char</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">ord</span>(<span
                                style="color:rgb(206,145,120)">"D"</span>))</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">chr</span>(<span
                                style="color:rgb(181,206,168)">99</span>)) <span style="color:rgb(106,153,85)"># convert
                                unicode to char</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== switch statement ============================ '</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">11</span>
                </div><br>
                <div><span style="color:rgb(197,134,192)">match</span> <span
                                style="color:rgb(156,220,254)">value</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> <span
                                style="color:rgb(181,206,168)">10</span><span
                                style="color:rgb(212,212,212)">|</span><span style="color:rgb(181,206,168)">11</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"OK"</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> <span
                                style="color:rgb(181,206,168)">15</span>:</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Warning"</span>)</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">case</span> _: &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use
                                underscore to match anything else (like default in java)</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Unknown code"</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">'</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(206,145,120)">=====================<wbr>==== end ============================ '</span>)
                </div>

        </div>
</div>
  `
        const html2 = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(106,153,85)">#
                                ------------------------------<wbr>---------------- functions</span></div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">calculate_area</span>(<span
                                style="color:rgb(156,220,254)">width</span>, <span
                                style="color:rgb(156,220,254)">height</span>, <span
                                style="color:rgb(156,220,254)">length</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">1</span>):
                        &nbsp; <span style="color:rgb(106,153,85)"># args with default values must go at the end</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(156,220,254)">width</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(156,220,254)">height</span> <span
                                style="color:rgb(212,212,212)">*</span> <span
                                style="color:rgb(156,220,254)">length</span></div><br>
                <div><span style="color:rgb(106,153,85)"># cannot overload functions; it's name (and module) must be
                                unique</span></div><br>
                <div><span style="color:rgb(106,153,85)"># area = calculate_area(2, 3)</span></div>
                <div><span style="color:rgb(156,220,254)">area</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(220,220,170)">calculate_area</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(156,220,254)">length</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">8</span>)
                        <span style="color:rgb(106,153,85)"># if you supply the variable name, then they don't have to
                                be in order</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">area</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># variable length function</span></div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(212,212,212)">*</span><span
                                style="color:rgb(156,220,254)">args</span>): &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># args is a variable length list (tuple)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Type: "</span>, <span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">args</span>)) <span style="color:rgb(106,153,85)">#
                                built-in function type() returns the variable class type</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># output: Type: &nbsp;&lt;class
                                'tuple'&gt;</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">name</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">args</span>) <span
                                style="color:rgb(212,212,212)">&gt;=</span> <span
                                style="color:rgb(181,206,168)">1</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># len() is a built-in function to get the length</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">args</span>[<span
                                style="color:rgb(181,206,168)">0</span>]) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># tuple can be accessed like an array</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">value</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">args</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># tuple can be treated as an iterable list</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">value</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(206,145,120)">"Trees"</span>, <span
                                style="color:rgb(206,145,120)">"oak"</span>, <span
                                style="color:rgb(206,145,120)">"ash"</span>, <span
                                style="color:rgb(206,145,120)">"linden"</span>)</div>
                <div><span style="color:rgb(220,220,170)">catalogue</span>(<span
                                style="color:rgb(206,145,120)">"Blank"</span>) <span style="color:rgb(106,153,85)">#
                                args is treated as an empty list</span></div><br>
                <div><span style="color:rgb(106,153,85)"># tuple is a non-modifiable list</span></div><br>
                <div><span style="color:rgb(106,153,85)"># ---------- variable length keyword args</span></div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span
                                style="color:rgb(220,220,170)">details</span>(<span
                                style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(212,212,212)">**</span><span
                                style="color:rgb(156,220,254)">kwargs</span>): &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># kwargs = keyword args</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Name"</span>, <span
                                style="color:rgb(156,220,254)">name</span>)</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">kwargs</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># kwargs type is 'dict'; similar to a hashmap in java; list
                                of key-value pairs</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">kwargs</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># output looks like this: {'height':
                                170, 'age': 42}</span></div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(206,145,120)">"height"</span> <span
                                style="color:rgb(86,156,214)">in</span> <span
                                style="color:rgb(156,220,254)">kwargs</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># check if the dict has a key called 'height'</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Height"</span>, <span
                                style="color:rgb(156,220,254)">kwargs</span>[<span
                                style="color:rgb(206,145,120)">"height"</span>])</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">key</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">kwargs</span>:
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">key</span>, <span
                                style="color:rgb(156,220,254)">kwargs</span>[<span
                                style="color:rgb(156,220,254)">key</span>])</div><br>
                <div><span style="color:rgb(220,220,170)">details</span>(<span
                                style="color:rgb(206,145,120)">"Sue"</span>, <span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">170</span>,
                        <span style="color:rgb(156,220,254)">age</span><span
                                style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">42</span>)
                </div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- multiple return values</span></div><br>
                <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">names</span>():
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                                style="color:rgb(206,145,120)">"Bob"</span>, <span
                                style="color:rgb(206,145,120)">"Sue"</span>, <span
                                style="color:rgb(206,145,120)">"Pete"</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># returns a tuple; can have mixed types</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># called 'packing' a
                                tuple</span></div><br>
                <div><span style="color:rgb(156,220,254)">name1</span>, <span
                                style="color:rgb(156,220,254)">name2</span>, <span
                                style="color:rgb(156,220,254)">name3</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(220,220,170)">names</span>() &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># called 'unpacking' a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">name1</span>, <span
                                style="color:rgb(156,220,254)">name2</span>, <span
                                style="color:rgb(156,220,254)">name3</span>)</div>
                <div class="yj6qo ajU">
                        <div id=":11n" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                <div class="adL"><br><br><br></div>
        </div>
</div>
  `

        const html3 = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(106,153,85)"># containers in python is similar to collections in java</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># create a tuple using (). &nbsp; &nbsp; &nbsp;eg. stuff =
                                ("a", 1, 2)</span></div>
                <div><span style="color:rgb(106,153,85)"># create a list &nbsp;using []. &nbsp; &nbsp; &nbsp;eg. stuff =
                                ["a", 1, 2]</span></div>
                <div><span style="color:rgb(106,153,85)"># create a set &nbsp; using {}. &nbsp; &nbsp; &nbsp;eg. stuff =
                                {1, 3, 9} </span></div><br>
                <div><span style="color:rgb(106,153,85)"># create a dictionary (similar to a map in java)</span></div>
                <div><span style="color:rgb(106,153,85)"># months = {</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Jan": "January",</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Feb": "February",</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; &nbsp; "Mar": "March",</span></div>
                <div><span style="color:rgb(106,153,85)"># }</span></div><br>
                <div><span style="color:rgb(106,153,85)"># ---------- tuples</span></div><br>
                <div><span style="color:rgb(156,220,254)">stuff</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"Charles"</span>, <span
                                style="color:rgb(181,206,168)">7</span>, <span
                                style="color:rgb(181,206,168)">8.2</span>, <span
                                style="color:rgb(86,156,214)">True</span>, <span
                                style="color:rgb(86,156,214)">False</span>, <span
                                style="color:rgb(206,145,120)">"Cats"</span>) <span style="color:rgb(106,153,85)">#
                                packing the tuple</span></div><br>
                <div><span style="color:rgb(156,220,254)">name</span>, <span
                                style="color:rgb(156,220,254)">value1</span>, <span
                                style="color:rgb(156,220,254)">value2</span>, <span
                                style="color:rgb(156,220,254)">bool1</span>, <span
                                style="color:rgb(156,220,254)">bool2</span>, <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(156,220,254)">stuff</span> &nbsp; <span style="color:rgb(106,153,85)">#
                                unpacking the tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">name</span>,
                        <span style="color:rgb(156,220,254)">value1</span>, <span
                                style="color:rgb(156,220,254)">value2</span>, <span
                                style="color:rgb(156,220,254)">bool1</span>, <span
                                style="color:rgb(156,220,254)">bool2</span>, <span
                                style="color:rgb(156,220,254)">animal</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">person</span>, <span
                                style="color:rgb(156,220,254)">number1</span>, <span
                                style="color:rgb(156,220,254)">number2</span>, <span
                                style="color:rgb(212,212,212)">*</span><span style="color:rgb(156,220,254)">other</span>
                        <span style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">stuff</span>
                        &nbsp;<span style="color:rgb(106,153,85)"># put all other values in a list</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">person</span>, <span
                                style="color:rgb(156,220,254)">number1</span>, <span
                                style="color:rgb(156,220,254)">number2</span>, <span
                                style="color:rgb(156,220,254)">other</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">other</span>))</div><br>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"cat"</span>,) <span style="color:rgb(106,153,85)"># if
                                you want to create a tuple with one element, it needs to look like this</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- slicing</span></div><br>
                <div><span style="color:rgb(156,220,254)">animals</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"dog"</span>, <span
                                style="color:rgb(206,145,120)">"giraffe"</span>, <span
                                style="color:rgb(206,145,120)">"lion"</span>, <span
                                style="color:rgb(206,145,120)">"elephant"</span>, <span
                                style="color:rgb(206,145,120)">"badger"</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">2</span>])</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">4</span>])
                        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># returns a new tuple with items
                                in index 1 to 3</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>])
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># last value in the
                                tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(181,206,168)">4</span>:<span
                                style="color:rgb(212,212,212)">-</span><span style="color:rgb(181,206,168)">1</span>])
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[<span
                                style="color:rgb(181,206,168)">1</span>:<span
                                style="color:rgb(212,212,212)">-</span><span
                                style="color:rgb(181,206,168)">1</span>:<span style="color:rgb(181,206,168)">2</span>])
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># specify a step size of 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[:<span
                                style="color:rgb(181,206,168)">3</span>]) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># start of range is optional, default is first
                                element</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[::<span
                                style="color:rgb(181,206,168)">2</span>]) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># end of range is optional, default is entire list</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals</span>[::]) &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># entire list</span></div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- tuple functions and methods</span></div><br>
                <div><span style="color:rgb(156,220,254)">temp</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">7</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">7</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">9</span>, <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">4</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                number of items</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">max</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                max value in list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">min</span>(<span
                                style="color:rgb(156,220,254)">temp</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                min value in list</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">temp</span>.<span
                                style="color:rgb(220,220,170)">count</span>(<span
                                style="color:rgb(181,206,168)">4</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return the count of occurrance of "4"</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">temp</span>.<span
                                style="color:rgb(220,220,170)">index</span>(<span
                                style="color:rgb(181,206,168)">4</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return the index of the first occurrance of "4"</span></div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"It_was_the_best_of_times"</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">text</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                length of text</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">max</span>(<span
                                style="color:rgb(156,220,254)">text</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                return char that has the max unicode value</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">min</span>(<span
                                style="color:rgb(156,220,254)">text</span>))</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">text</span>.<span
                                style="color:rgb(220,220,170)">count</span>(<span
                                style="color:rgb(206,145,120)">"w"</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">text</span>.<span
                                style="color:rgb(220,220,170)">index</span>(<span
                                style="color:rgb(206,145,120)">"t"</span>))</div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- tuple operators</span></div><br>
                <div><span style="color:rgb(156,220,254)">fruits1</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>
                </div>
                <div><span style="color:rgb(156,220,254)">fruits2</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"banana"</span>, <span
                                style="color:rgb(206,145,120)">"grape"</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span> <span
                                style="color:rgb(212,212,212)">+</span> <span
                                style="color:rgb(156,220,254)">fruits2</span>) <span style="color:rgb(106,153,85)">#
                                return new tuple with both lists</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span> <span
                                style="color:rgb(212,212,212)">*</span> <span style="color:rgb(181,206,168)">3</span>)
                        &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># join tuple 3 times</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>)) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># everything is an object in python, id is unique for each
                                object</span></div>
                <div><span style="color:rgb(156,220,254)">fruits1</span> <span style="color:rgb(212,212,212)">+=</span>
                        <span style="color:rgb(156,220,254)">fruits2</span> &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># assign new tuple to fruits1</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits1</span>)</div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- lists</span></div><br>
                <div><span style="color:rgb(106,153,85)"># lists are the same as tuples but are modifiable</span></div>
                <br>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>, <span
                                style="color:rgb(206,145,120)">"grape"</span>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>))</div>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">+=</span>
                        [<span style="color:rgb(206,145,120)">"melon"</span>]</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">id</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)) &nbsp;<span
                                style="color:rgb(106,153,85)"># id is the same</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>[<span style="color:rgb(181,206,168)">0</span>]
                        <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(206,145,120)">"strawberry"</span> &nbsp;<span
                                style="color:rgb(106,153,85)"># modify element</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">append</span>(<span
                                style="color:rgb(206,145,120)">"pear"</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">extend</span>([<span
                                style="color:rgb(206,145,120)">"blueberry"</span>]) &nbsp;<span
                                style="color:rgb(106,153,85)"># append a collection</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span>.<span
                                style="color:rgb(220,220,170)">insert</span>(<span
                                style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(206,145,120)">"kiwi"</span>) &nbsp;<span
                                style="color:rgb(106,153,85)"># insert new element at index 2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits_tuple</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">tuple</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>) <span style="color:rgb(106,153,85)"># cast
                                the list to a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits_tuple</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits_list</span> <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">fruits_tuple</span>) <span
                                style="color:rgb(106,153,85)"># cast the tuple to a list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruits_list</span>)</div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- replacing slices</span></div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">list</span>((<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">5</span>, <span style="color:rgb(181,206,168)">6</span>,
                        <span style="color:rgb(181,206,168)">7</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                another way to declare a list by using the built-in function</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>:<span style="color:rgb(181,206,168)">4</span>]
                        <span style="color:rgb(212,212,212)">=</span> (<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">0</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                replace items at index 2 and index 3 with these 4 values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>:<span style="color:rgb(181,206,168)">6</span>]
                        <span style="color:rgb(212,212,212)">=</span> [] &nbsp;<span style="color:rgb(106,153,85)">#
                                remove values in this slice</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">1</span>::<span style="color:rgb(181,206,168)">2</span>]
                        <span style="color:rgb(212,212,212)">=</span> [<span
                                style="color:rgb(206,145,120)">"hello"</span>, <span
                                style="color:rgb(206,145,120)">"to"</span>, <span
                                style="color:rgb(206,145,120)">"you"</span>] &nbsp;<span style="color:rgb(106,153,85)">#
                                specify a step size; called extended slice syntax; if you do this, you must provide the
                                same number of values you are replacing</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># output is:
                                [0, 'hello', 4, 'to', 6, 'you']</span></div><br><br>
                <div><span style="color:rgb(106,153,85)"># ---------- remove items from lists</span></div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>, <span style="color:rgb(181,206,168)">5</span>,
                        <span style="color:rgb(181,206,168)">6</span>]
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">remove</span>(<span
                                style="color:rgb(181,206,168)">4</span>) &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># will remove element with this value</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">pop</span>(<span style="color:rgb(181,206,168)">1</span>)
                        &nbsp; <span style="color:rgb(106,153,85)"># remove element at an index; note: pop() will remove
                                the last value</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">value</span>, <span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">numbers</span>[<span
                                style="color:rgb(181,206,168)">2</span>] &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># remove element at an index</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">clear</span>() &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># remove all values</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- list comprehensions"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">i</span> <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(156,220,254)">i</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">range</span>(<span style="color:rgb(181,206,168)">0</span>,
                        <span style="color:rgb(181,206,168)">5</span>)] &nbsp; <span style="color:rgb(106,153,85)">#
                                shortcut to populate a list with values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">i</span><span
                                style="color:rgb(212,212,212)">**</span><span style="color:rgb(181,206,168)">2</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">0</span>, <span style="color:rgb(181,206,168)">5</span>)]
                        &nbsp;<span style="color:rgb(106,153,85)"># populate using i^2</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"cat"</span>, <span
                                style="color:rgb(206,145,120)">"mouse"</span>, <span
                                style="color:rgb(206,145,120)">"dog"</span>, <span
                                style="color:rgb(206,145,120)">"badger"</span>]</div><br>
                <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">animals1</span>] &nbsp;<span
                                style="color:rgb(106,153,85)"># another way to copy the list</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">animals2</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">lengths</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(220,220,170)">len</span>(<span
                                style="color:rgb(156,220,254)">animal</span>) <span
                                style="color:rgb(197,134,192)">for</span> <span
                                style="color:rgb(156,220,254)">animal</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">animals1</span>] &nbsp;<span
                                style="color:rgb(106,153,85)"># create a list of the lengths of the strings in
                                animals1</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">lengths</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- comprehension conditions"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">words1</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"it"</span>, <span
                                style="color:rgb(206,145,120)">"was"</span>, <span
                                style="color:rgb(206,145,120)">"the"</span>, <span
                                style="color:rgb(206,145,120)">"best"</span>, <span
                                style="color:rgb(206,145,120)">"of"</span>, <span
                                style="color:rgb(206,145,120)">"times"</span>]</div><br>
                <div><span style="color:rgb(156,220,254)">words2</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(197,134,192)">for</span>
                        <span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">words1</span> <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span style="color:rgb(156,220,254)">w</span>)
                        <span style="color:rgb(212,212,212)">&gt;</span> <span style="color:rgb(181,206,168)">3</span>]
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># add a conditional filter</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">words2</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">words3</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(156,220,254)">w</span>.<span
                                style="color:rgb(220,220,170)">upper</span>() <span
                                style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(220,220,170)">len</span>(<span style="color:rgb(156,220,254)">w</span>)
                        <span style="color:rgb(212,212,212)">&gt;</span> <span style="color:rgb(181,206,168)">3</span>
                        <span style="color:rgb(197,134,192)">else</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">w</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">words1</span>] &nbsp; <span
                                style="color:rgb(106,153,85)"># syntax for if/else</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">words3</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- sets"</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># sets in python are similar to sets in java:</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- can only store unique items (eg. cannot put the same
                                item in twice)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp;- no intrinsic order </span></div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">4</span>}
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                                style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">numbers</span>: &nbsp;<span
                                style="color:rgb(106,153,85)"># iterate over all values (order is random)</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">x</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(181,206,168)">3</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">numbers</span>) &nbsp;<span
                                style="color:rgb(106,153,85)"># test if a value is in a set (returns true/false)</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">add</span>(<span style="color:rgb(181,206,168)">7</span>)
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># add item to the
                                set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">update</span>([<span
                                style="color:rgb(181,206,168)">9</span>, <span style="color:rgb(181,206,168)">8</span>])
                        &nbsp;<span style="color:rgb(106,153,85)"># add items in a collection to a set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">remove</span>(<span
                                style="color:rgb(181,206,168)">8</span>) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># remove by value; will get an error if value is not in
                                the set</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers</span>.<span
                                style="color:rgb(220,220,170)">discard</span>(<span
                                style="color:rgb(181,206,168)">3</span>) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># remove by value but might not exist (no error)</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">set</span>([<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>]))
                        &nbsp; <span style="color:rgb(106,153,85)"># alternate way to create a set using the built-in
                                function</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(156,220,254)">n</span>
                        <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">n</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(78,201,176)">range</span>(<span
                                style="color:rgb(181,206,168)">5</span>, <span
                                style="color:rgb(181,206,168)">8</span>)}) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># similar to list comprehension</span>
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- set functions"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">numbers1</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">7</span>,
                        <span style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(181,206,168)">9</span>}
                </div>
                <div><span style="color:rgb(156,220,254)">numbers2</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">4</span>,
                        <span style="color:rgb(181,206,168)">6</span>, <span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">5</span>}
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">union</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>)<wbr>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># return new set; only unique values; no duplicate
                                values</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">intersection</span>(<span
                                style="color:rgb(156,220,254)">nu<wbr>mbers2</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># common values</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>.<span
                                style="color:rgb(220,220,170)">difference</span>(<span
                                style="color:rgb(156,220,254)">numb<wbr>ers2</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># take set numbers1 and remove values
                                from numbers2</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span> <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">numbers2</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                                same result as difference</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>.<span
                                style="color:rgb(220,220,170)">difference</span>(<span
                                style="color:rgb(156,220,254)">numb<wbr>ers1</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span> <span
                                style="color:rgb(212,212,212)">-</span> <span
                                style="color:rgb(156,220,254)">numbers1</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">numbers2</span>.<span
                                style="color:rgb(220,220,170)">symmetric_<wbr>difference</span>(<span
                                style="color:rgb(156,220,254)">numbers1</span>)) &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># return the values that only exist in one set</span>
                </div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># output: {1, 3, 5, 7, 8, 9}</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(181,206,168)">3</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>})) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># superset contains all values in the other set, and
                                may contain more</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>,
                        <span style="color:rgb(181,206,168)">4</span>, <span
                                style="color:rgb(181,206,168)">5</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>}))
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>({<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span
                                style="color:rgb(181,206,168)">3</span>}.<span
                                style="color:rgb(220,220,170)">issuperset</span>({<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>, <span style="color:rgb(181,206,168)">4</span>}))
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- dictionaries"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">months</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Jan"</span>: <span
                                style="color:rgb(206,145,120)">"January"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Feb"</span>: <span
                                style="color:rgb(206,145,120)">"February"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mar"</span>: <span
                                style="color:rgb(206,145,120)">"March"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(206,145,120)">"Jan"</span>])</div>
                <div><span style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(206,145,120)">"Apr"</span>] <span
                                style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(206,145,120)">"April"</span> &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># adds a new key/value pair</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">update</span>({<span
                                style="color:rgb(206,145,120)">"May"</span>: <span
                                style="color:rgb(206,145,120)">"May"</span>, <span
                                style="color:rgb(206,145,120)">"Jun"</span>: <span
                                style="color:rgb(206,145,120)">"June"</span>}) &nbsp;<span
                                style="color:rgb(106,153,85)"># add values from one dict to another</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">months</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># iterate over the keys</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>, <span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(156,220,254)">month</span>])</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">keys</span>(): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># another way to iterate over the keys</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>, <span
                                style="color:rgb(156,220,254)">months</span>[<span
                                style="color:rgb(156,220,254)">month</span>])</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">month</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">values</span>(): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># iterate over the values</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">month</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">abbrev</span>,
                        <span style="color:rgb(156,220,254)">name</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(156,220,254)">months</span>.<span
                                style="color:rgb(220,220,170)">items</span>(): &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># months.items() returns the tuple; unpacking the
                                tuple</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">abbrev</span>, <span
                                style="color:rgb(156,220,254)">name</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Oct"</span>
                        <span style="color:rgb(197,134,192)">in</span> <span
                                style="color:rgb(156,220,254)">months</span>) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># returns true/false if key is in the
                                dict</span>
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- removing dictionary items"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Mon"</span>: <span
                                style="color:rgb(206,145,120)">"Monday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Tue"</span>: <span
                                style="color:rgb(206,145,120)">"Tuesday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Wed"</span>: <span
                                style="color:rgb(206,145,120)">"Wednesday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Thur"</span>: <span
                                style="color:rgb(206,145,120)">"Thursday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Fri"</span>: <span
                                style="color:rgb(206,145,120)">"Friday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sat"</span>: <span
                                style="color:rgb(206,145,120)">"Saturday"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sun"</span>: <span
                                style="color:rgb(206,145,120)">"Sunday"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">days</span>[<span
                                style="color:rgb(206,145,120)">"Mon"</span>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">pop</span>(<span
                                style="color:rgb(206,145,120)">"Thur"</span>))</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">popitem</span>()) &nbsp;<span
                                style="color:rgb(106,153,85)"># returns the last tuple and removes it</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br>
                <div><span style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">clear</span>()</div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span> {}
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">days</span>)
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- dictionary views"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">people</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Bob"</span>: <span
                                style="color:rgb(181,206,168)">42</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sue"</span>: <span
                                style="color:rgb(181,206,168)">53</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Steve"</span>: <span
                                style="color:rgb(181,206,168)">25</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">keys</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">keys</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># note: if the dict people changes, these
                                keys/values/items are also updated</span>
                </div>
                <div><span style="color:rgb(156,220,254)">values</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">values</span>()
                </div>
                <div><span style="color:rgb(156,220,254)">items</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">items</span>()
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">keys</span>)) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># these are special dict types so that they are
                                automatically updated</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">values</span>)) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># these are views into the dict collection</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">items</span>))</div><br>
                <div><span style="color:rgb(156,220,254)">item_list</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">list</span>(<span
                                style="color:rgb(156,220,254)">items</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                if you convert to a list, it isn't auto updated anymore</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">items</span>)</div>
                <div><span style="color:rgb(197,134,192)">del</span> <span
                                style="color:rgb(156,220,254)">people</span>[<span
                                style="color:rgb(206,145,120)">"Steve"</span>]</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">items</span>)</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">item_list</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- default dictionaries "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">from</span> <span
                                style="color:rgb(78,201,176)">collections</span> <span
                                style="color:rgb(197,134,192)">import</span> <span
                                style="color:rgb(78,201,176)">defaultdict</span></div><br>
                <div><span style="color:rgb(156,220,254)">people</span> <span style="color:rgb(212,212,212)">=</span> {
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Bob"</span>: <span
                                style="color:rgb(181,206,168)">42</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Sue"</span>: <span
                                style="color:rgb(181,206,168)">53</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Steve"</span>: <span
                                style="color:rgb(181,206,168)">25</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">people</span>.<span
                                style="color:rgb(220,220,170)">get</span>(<span
                                style="color:rgb(206,145,120)">"Ethel"</span>, <span
                                style="color:rgb(181,206,168)">99</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                use get methods; will not throw an exception if key doesn't exist</span></div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># can provide a default value if key is not
                                there</span></div><br>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">defaultdict</span>(<span
                                style="color:rgb(78,201,176)">str</span>) &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># or can get similar behavior using a built-in
                                module</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">days</span>.<span
                                style="color:rgb(220,220,170)">update</span>({<span
                                style="color:rgb(206,145,120)">"Mon"</span>: <span
                                style="color:rgb(206,145,120)">"Monday"</span>, <span
                                style="color:rgb(206,145,120)">"Tue"</span>: <span
                                style="color:rgb(206,145,120)">"Tuesday"</span>})</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">days</span>[<span
                                style="color:rgb(206,145,120)">"Wed"</span>])</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- enumerate and zip "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"apple"</span>, <span
                                style="color:rgb(206,145,120)">"pear"</span>, <span
                                style="color:rgb(206,145,120)">"orange"</span>)</div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"Mon"</span>, <span
                                style="color:rgb(206,145,120)">"Tue"</span>, <span
                                style="color:rgb(206,145,120)">"Wed"</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>,
                        <span style="color:rgb(156,220,254)">fruit</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">enumerate</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># iterate over list</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">i</span>, <span
                                style="color:rgb(156,220,254)">fruit</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">fruit</span>,
                        <span style="color:rgb(156,220,254)">day</span> <span style="color:rgb(197,134,192)">in</span>
                        <span style="color:rgb(78,201,176)">zip</span>(<span
                                style="color:rgb(156,220,254)">fruits</span>, <span
                                style="color:rgb(156,220,254)">days</span>): &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># allows you to iterate over 2 lists at the same
                                time</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">fruit</span>, <span
                                style="color:rgb(156,220,254)">day</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- hashing "</span>)</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">hash</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>))) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># can only use something as a key in a map/set if you can
                                generate a hash code from it</span>
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(220,220,170)">hash</span>((<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        []))) &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># use hash() function to
                                test if you can generate a hash</span></div><br>
                <div><span style="color:rgb(106,153,85)"># in python: something must be immutable in order to generate a
                                hash code from it</span></div>
                <div><span style="color:rgb(106,153,85)"># cannot use a list for the hash since it is mutable</span>
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- containers summary "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span>
                        (<span style="color:rgb(206,145,120)">"apple"</span>,) &nbsp; &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># tuples</span></div>
                <div><span style="color:rgb(156,220,254)">days</span> <span style="color:rgb(212,212,212)">=</span>
                        [<span style="color:rgb(206,145,120)">"mon"</span>] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;<span style="color:rgb(106,153,85)"># lists</span></div>
                <div><span style="color:rgb(156,220,254)">names</span> <span style="color:rgb(212,212,212)">=</span>
                        {<span style="color:rgb(206,145,120)">"Bob"</span>} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span style="color:rgb(106,153,85)"># sets</span>
                </div>
                <div><span style="color:rgb(156,220,254)">months</span> <span style="color:rgb(212,212,212)">=</span> {
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                                style="color:rgb(106,153,85)"># dict; trailing commas are fine</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Jan"</span>: <span
                                style="color:rgb(206,145,120)">"January"</span>,</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(206,145,120)">"Feb"</span>: <span
                                style="color:rgb(206,145,120)">"February"</span>,</div>
                <div>}</div><br>
                <div><span style="color:rgb(156,220,254)">something</span> <span style="color:rgb(212,212,212)">=</span>
                        [ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># can
                                create complex combinations of these containers</span></div>
                <div>&nbsp; &nbsp; {<span style="color:rgb(181,206,168)">1</span>, <span
                                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>},
                </div>
                <div>&nbsp; &nbsp; {</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(181,206,168)">8</span>: <span
                                style="color:rgb(206,145,120)">"eight"</span>,</div>
                <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(181,206,168)">9</span>: (<span
                                style="color:rgb(181,206,168)">1</span>, <span style="color:rgb(181,206,168)">2</span>,
                        <span style="color:rgb(181,206,168)">3</span>)
                </div>
                <div>&nbsp; &nbsp; }</div>
                <div>]</div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">something</span>)</div>
                <div><span style="color:rgb(156,220,254)">something1</span> <span
                                style="color:rgb(212,212,212)">=</span> [{<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>},
                        {<span style="color:rgb(181,206,168)">8</span>: <span
                                style="color:rgb(206,145,120)">'eight'</span>, <span
                                style="color:rgb(181,206,168)">9</span>: (<span style="color:rgb(181,206,168)">1</span>,
                        <span style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>)}]
                </div>
        </div>
</div>
  `

        const html4 = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- string variable interpolation"</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">distance</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">1.23</span>
                </div>
                <div><span style="color:rgb(156,220,254)">height</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">2.34</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># idea: given the 2 variables above, you want to print them out
                                like this:</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; print("height: " + height + ", distance: " +
                                distance)</span></div>
                <div><span style="color:rgb(106,153,85)"># there are 3 ways to do this in python:</span></div><br>
                <div><span style="color:rgb(106,153,85)"># an "f" string: you can now use the variables directly in
                                curly braces {}</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"Height: </span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">, Distance:
                        </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">distance</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div>
                <div><span style="color:rgb(106,153,85)"># you can also format the value with this syntax:</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">f</span><span
                                style="color:rgb(206,145,120)">"Height: </span><span
                                style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">height</span><span
                                style="color:rgb(86,156,214)">:.1f}</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">{</span><span
                                style="color:rgb(156,220,254)">distance</span><span
                                style="color:rgb(86,156,214)">}</span><span style="color:rgb(206,145,120)">"</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># string format method: older way to do this. uses positional
                                reference to args</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Height:
                        </span><span style="color:rgb(86,156,214)">{1:.1f}</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">{0}</span><span
                                style="color:rgb(206,145,120)">"</span>.<span
                                style="color:rgb(220,220,170)">format</span>(<span
                                style="color:rgb(156,220,254)">distance</span>, <span
                                style="color:rgb(156,220,254)">height</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># provide the args as a tuple</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Height:
                        </span><span style="color:rgb(86,156,214)">%.1f</span><span style="color:rgb(206,145,120)">,
                                Distance: </span><span style="color:rgb(86,156,214)">%f</span><span
                                style="color:rgb(206,145,120)">"</span> <span style="color:rgb(212,212,212)">%</span>
                        (<span style="color:rgb(156,220,254)">height</span>, <span
                                style="color:rgb(156,220,254)">distance</span>))</div><br>
                <div><span style="color:rgb(106,153,85)"># example of a raw string</span></div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"one</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(209,105,105)">two"</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- matching text "</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># import regex module</span></div>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"Once upon a time"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># result contains the regex match</span></div>
                <div><span style="color:rgb(106,153,85)"># result = re.match(arg1, arg2, arg3)</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg1 is the regex string</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg2 is the string to test</span></div>
                <div><span style="color:rgb(106,153,85)"># &nbsp; arg3 specifies flags (optional)</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"O"</span>,
                        <span style="color:rgb(156,220,254)">text</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div><br>
                <div><span style="color:rgb(106,153,85)"># first arg is the regex string. You can use a regular string,
                                or use a raw string if there are escape/special chars</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"o.</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(209,105,105)">time"</span>, <span
                                style="color:rgb(156,220,254)">text</span>, <span
                                style="color:rgb(156,220,254)">flags</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">IGNORECASE</span>)
                </div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">result</span>
                        <span style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>:
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># None is a special type
                                in python; singleton</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"No match"</span>) &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># 'is' checks if the object ids are the same</span></div>
                <div><span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>()) &nbsp; <span
                                style="color:rgb(106,153,85)"># group has the matching text </span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- capture groups "</span>)</div><br><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"ID: 123 Some Corp. Serial: 345453"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># use a regex to grab just the numbers</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">".</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">{3}</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(209,105,105)">.</span><span
                                style="color:rgb(215,186,125)">*?</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(209,105,105)">$<wbr>"</span>, <span
                                style="color:rgb(156,220,254)">text</span>)
                </div><br>
                <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">result</span>
                        <span style="color:rgb(86,156,214)">is</span> <span style="color:rgb(86,156,214)">None</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"No match"</span>)</div>
                <div><span style="color:rgb(197,134,192)">else</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>(<span
                                style="color:rgb(181,206,168)">1</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                get the first capture group</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>(<span
                                style="color:rgb(181,206,168)">2</span>)) &nbsp;<span style="color:rgb(106,153,85)">#
                                get the second capture group</span></div><br><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- escaping and ternary operator "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"a</span><span
                                style="color:rgb(215,186,125)">\n</span><span style="color:rgb(209,105,105)">z"</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">match</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"a</span><span
                                style="color:rgb(215,186,125)">\\</span><span style="color:rgb(209,105,105)">nz"</span>,
                        <span style="color:rgb(156,220,254)">text</span>) &nbsp;<span style="color:rgb(106,153,85)">#
                                need to escape it even though it is a raw string</span>
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">group</span>()) <span style="color:rgb(106,153,85)">#
                                example of a ternary operator</span>
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- comments in regex "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">tag</span> <span style="color:rgb(212,212,212)">=</span> <span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">'&lt;div
                                id="123"&gt;Hello&lt;/div&gt;'</span></div>
                <div><span style="color:rgb(106,153,85)"># goal: match the id 123 and the Hello text</span></div><br>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span style="color:rgb(220,220,170)">match</span>(
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># use triple string """ to
                                define a multi-line string</span>
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"""</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &lt;div\s</span><span
                                style="color:rgb(215,186,125)">+</span><span style="color:rgb(209,105,105)"> &nbsp;
                                &nbsp; </span><span style="color:rgb(106,153,85)"># Match opening tag</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; id="</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"
                                &nbsp;</span><span style="color:rgb(106,153,85)"># Match ID</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &gt; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; </span><span style="color:rgb(106,153,85)"># Closing tag bracket</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; </span><span
                                style="color:rgb(206,145,120)">([^</span><span
                                style="color:rgb(209,105,105)">&lt;&gt;</span><span
                                style="color:rgb(206,145,120)">]</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)"> &nbsp;
                                &nbsp;</span><span style="color:rgb(106,153,85)"># Get content between open and close
                                tags.</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;</span></div>
                <div><span style="color:rgb(209,105,105)">&nbsp; &nbsp; """</span>, </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">tag</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">VERBOSE</span>) <span style="color:rgb(106,153,85)">#
                                re.VERBOSE means you want to allow comments in the regex</span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>()) <span style="color:rgb(106,153,85)">#
                                groups(): return a tuple with all the groups</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('123', 'Hello')</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- search "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">one</span></div>
                <div><span style="color:rgb(206,145,120)">two</span></div>
                <div><span style="color:rgb(206,145,120)">three</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(106,153,85)"># match a 't' char followed by an 'e' char. </span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">search</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">t.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(209,105,105)">e</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"</span>,
                        <span style="color:rgb(156,220,254)">text</span>)
                </div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>())
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('three',)</span></div><br>
                <div><span style="color:rgb(106,153,85)"># by default, re module will not include a newline char as a
                                match for the "."</span></div>
                <div><span style="color:rgb(106,153,85)"># if you want the "." to include all chars, use the re.DOTALL
                                flag</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">search</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">t.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(209,105,105)">e</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">"</span>,
                        <span style="color:rgb(156,220,254)">text</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">DOTALL</span>)
                </div>
                <div><span style="color:rgb(106,153,85)"># output: ('two\nthree',)</span></div>
                <div><span style="color:rgb(106,153,85)"># note: .* is a greedy match, so it will not stop at the first
                                'e' </span></div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"No
                                match"</span> <span style="color:rgb(197,134,192)">if</span> <span
                                style="color:rgb(156,220,254)">result</span> <span
                                style="color:rgb(197,134,192)">is</span> <span style="color:rgb(86,156,214)">None</span>
                        <span style="color:rgb(197,134,192)">else</span> <span
                                style="color:rgb(156,220,254)">result</span>.<span
                                style="color:rgb(220,220,170)">groups</span>())
                </div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- findall "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">menu</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">1. Fish</span></div>
                <div><span style="color:rgb(206,145,120)">2. Bread</span></div>
                <div><span style="color:rgb(206,145,120)">3. Peppers</span></div>
                <div><span style="color:rgb(206,145,120)">4. Potatoes</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div><br>
                <div><span style="color:rgb(106,153,85)"># goal: find all the matches for a number followed by a '.'
                                followed by some text</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(86,156,214)">r</span><span style="color:rgb(209,105,105)">"</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\d</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(215,186,125)">\.</span><span
                                style="color:rgb(209,105,105)">\s</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">\w</span><span
                                style="color:rgb(215,186,125)">+</span><span
                                style="color:rgb(206,145,120)">)</span><span
                                style="color:rgb(215,186,125)">\n</span><span
                                style="color:rgb(209,105,105)"><wbr>"</span>, <span
                                style="color:rgb(156,220,254)">menu</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: [('1', 'Fish'), ('2', 'Bread'), ('3', 'Peppers'),
                                ('4', 'Potatoes')]</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- multi-line matching "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">menu</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"""</span>
                </div>
                <div><span style="color:rgb(206,145,120)">1. Fish</span></div>
                <div><span style="color:rgb(206,145,120)">2. Bread</span></div>
                <div><span style="color:rgb(206,145,120)">3. Peppers</span></div>
                <div><span style="color:rgb(206,145,120)">4. Potatoes</span></div>
                <div><span style="color:rgb(206,145,120)">"""</span></div>
                <div><span style="color:rgb(106,153,85)"># goal: grab each line in the text and return as a list</span>
                </div>
                <div><span style="color:rgb(106,153,85)"># if you do not use the re.MULTILINE flag, it will return the
                                entire string (not split into multiple lines)</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">findall</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"^</span><span
                                style="color:rgb(206,145,120)">(</span><span
                                style="color:rgb(209,105,105)">.</span><span
                                style="color:rgb(215,186,125)">*</span><span
                                style="color:rgb(206,145,120)">)</span><span style="color:rgb(209,105,105)">$"</span>,
                        <span style="color:rgb(156,220,254)">menu</span>, <span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">MULTILINE</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: ['', '1. Fish', '2. Bread', '3. Peppers', '4.
                                Potatoes', '']</span></div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- compile regex "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">re</span>
                </div><br>
                <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(206,145,120)">"dog cat mouse"</span>
                </div><br>
                <div><span style="color:rgb(106,153,85)"># if you use the same regex more than once (or in a loop),
                                compile will be more efficient</span></div>
                <div><span style="color:rgb(156,220,254)">regex</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">compile</span>(<span
                                style="color:rgb(86,156,214)">r</span><span
                                style="color:rgb(209,105,105)">"C.</span><span
                                style="color:rgb(215,186,125)">*</span><span style="color:rgb(209,105,105)">T"</span>,
                        <span style="color:rgb(156,220,254)">flags</span><span
                                style="color:rgb(212,212,212)">=</span><span
                                style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(156,220,254)">IGNORECASE</span>)
                </div><br>
                <div><span style="color:rgb(106,153,85)"># goal: replace 'cat' with 'giraffe'</span></div>
                <div><span style="color:rgb(106,153,85)"># re.sub() does a substitution</span></div>
                <div><span style="color:rgb(156,220,254)">result</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(78,201,176)">re</span>.<span
                                style="color:rgb(220,220,170)">sub</span>(<span
                                style="color:rgb(156,220,254)">regex</span>, <span
                                style="color:rgb(206,145,120)">"giraffe"</span>, <span
                                style="color:rgb(156,220,254)">text</span>)
                </div><br>
                <div><span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">result</span>)</div>
                <div><span style="color:rgb(106,153,85)"># output: dog giraffe mouse</span></div>
                <div class="yj6qo ajU">
                        <div id=":19c" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                                        src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
                </div>
                <div class="adL"><br></div>
        </div>
</div>
  `

        const html5 = `
<div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
                <div class="adM"><br></div>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- exceptions "</span>)</div><br>
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">d</span> <span
                                style="color:rgb(212,212,212)">=</span> {}</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">d</span>[<span
                                style="color:rgb(206,145,120)">'Hello'</span>]</div><br>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(181,206,168)">1</span><span
                                style="color:rgb(212,212,212)">/</span><span style="color:rgb(181,206,168)">0</span>)
                </div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">ZeroDivisionError</span> <span
                                style="color:rgb(197,134,192)">as</span> <span
                                style="color:rgb(156,220,254)">zde</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Failed."</span>, <span
                                style="color:rgb(156,220,254)">zde</span>)</div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">Exception</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">e</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Caught exception"</span>, <span
                                style="color:rgb(78,201,176)">type</span>(<span
                                style="color:rgb(156,220,254)">e</span>))</div>
                <div><span style="color:rgb(197,134,192)">finally</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(206,145,120)">"Finally!"</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- raising exceptions "</span>)</div><br>
                <div><span style="color:rgb(86,156,214)">class</span> <span
                                style="color:rgb(78,201,176)">MyException</span>(<span
                                style="color:rgb(78,201,176)">Exception</span>): &nbsp; &nbsp; &nbsp; <span
                                style="color:rgb(106,153,85)"># MyException extends Exception</span></div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span></div><br>
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">raise</span> <span
                                style="color:rgb(78,201,176)">MyException</span>(<span
                                style="color:rgb(206,145,120)">"Oh no!"</span>)</div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">MyException</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">e</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">e</span>)</div><br><br>
                <div><span style="color:rgb(220,220,170)">print</span>()</div>
                <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"#
                                ---------- assertions "</span>)</div><br>
                <div><span style="color:rgb(156,220,254)">value</span> <span style="color:rgb(212,212,212)">=</span>
                        <span style="color:rgb(181,206,168)">7</span>
                </div><br>
                <div><span style="color:rgb(197,134,192)">try</span>:</div>
                <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">assert</span> <span
                                style="color:rgb(156,220,254)">value</span> <span
                                style="color:rgb(212,212,212)">&gt;</span> <span
                                style="color:rgb(181,206,168)">8</span>, <span style="color:rgb(206,145,120)">"Oh
                                no!"</span></div>
                <div><span style="color:rgb(197,134,192)">except</span> <span
                                style="color:rgb(78,201,176)">AssertionError</span> <span
                                style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">a</span>:
                </div>
                <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                                style="color:rgb(156,220,254)">a</span>)</div>
        </div>
</div>  
  `

        function createMarkup(content: any) {
                return { __html: content };
        }

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Python for Java Developers
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 1: Fundamentals
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Fundamentals" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Functions" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Containers" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Strings & Regex" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html4)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Exceptions" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html5)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>



                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
