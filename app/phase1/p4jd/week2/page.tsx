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

        function createMarkup(content: any) {
                return { __html: content };
        }

        const html = `
<div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                classes "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">eating</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># best practice to pass self;
                similar to 'this' in java</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"I'm eating!"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Person</span>() &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># no
                'new' keyword as in java</span></div>
        <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)</div>
        <br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                constructors "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">name</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># constructor must be called '__init__'. pass name to the
                constructor</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">name</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># _name can be called anything you want</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># python doesn't enforce
                private/public/protected methods</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># but common convention is to have
                '_' for protected field/method</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">eating</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)"> is eating!"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Person</span>(<span style="color:rgb(206,145,120)">"Bob"</span>)</div>
        <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)</div>
        <br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                convert to strings "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">name</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">name</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">eating</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)"> is eating!"</span>)</div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__str__</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># creating/overriding a 'toString()' method</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span></div><br>
        <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Person</span>(<span style="color:rgb(206,145,120)">"Bob"</span>)</div>
        <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(220,220,170)">str</span>(<span style="color:rgb(156,220,254)">p</span>) &nbsp; <span
                style="color:rgb(106,153,85)"># another way to call the 'toString()' method using the built-in str()
                function</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">text</span>)</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- eval
                and repr "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">name</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">name</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">eating</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)"> is eating!"</span>)</div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__str__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span></div>
        <div>&nbsp; &nbsp; </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__repr__</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># purpose: create a tostring method that is intended</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">'Person("</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">")'</span> &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># for machine comsumption (rather than human).</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># Idea:
                be able to re-create this obj using this string</span></div><br>
        <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Person</span>(<span style="color:rgb(206,145,120)">"Bob"</span>)</div>
        <div><span style="color:rgb(156,220,254)">p</span>.<span style="color:rgb(220,220,170)">eating</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">p</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">text</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(220,220,170)">str</span>(<span style="color:rgb(156,220,254)">p</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">text</span>)</div>
        <br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">eval</span>(<span
                style="color:rgb(220,220,170)">repr</span>(<span style="color:rgb(156,220,254)">p</span>))) &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># use 'repr' to call the __repr__() method</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># use 'eval' to run a string as python code</span></div><br><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                inheiritance "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Person</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">name</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">name</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">eating</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)"> is eating!"</span>)</div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__str__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">"Hello I am </span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">"</span></div>
        <div>&nbsp; &nbsp; </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__repr__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(86,156,214)">f</span><span style="color:rgb(206,145,120)">'Person("</span><span
                style="color:rgb(86,156,214)">{</span><span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_name</span><span style="color:rgb(86,156,214)">}</span><span
                style="color:rgb(206,145,120)">")'</span></div>
        <div>&nbsp; &nbsp; </div>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Employee</span>(<span
                style="color:rgb(78,201,176)">Person</span>): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># define a class that extends the Person class</span>
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">go_on_holiday</span>(<span style="color:rgb(156,220,254)">self</span>):
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"I'm going on holiday!"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">p</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Person</span>(<span style="color:rgb(206,145,120)">"Bob"</span>)</div>
        <div><span style="color:rgb(156,220,254)">e</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Employee</span>(<span style="color:rgb(206,145,120)">"Sue"</span>)</div>
        <div><span style="color:rgb(156,220,254)">e</span>.<span style="color:rgb(220,220,170)">eating</span>()</div>
        <div><span style="color:rgb(156,220,254)">e</span>.<span style="color:rgb(220,220,170)">go_on_holiday</span>()
        </div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                overriding methods "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Animal</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">speak</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"I'm an animal"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Cat</span>(<span
                style="color:rgb(78,201,176)">Animal</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">speak</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># overrides inheirited method</span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Meeouw"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">cat</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Cat</span>()</div>
        <div><span style="color:rgb(156,220,254)">cat</span>.<span style="color:rgb(220,220,170)">speak</span>()</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- super
                "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Machine</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Machine constructor"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Car</span>(<span
                style="color:rgb(78,201,176)">Machine</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">super</span>().<span
                style="color:rgb(220,220,170)">__init__</span>() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># call the parent constructor</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Car constructor"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Car</span>()</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- class
                attributes "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Machine</span>:</div>
        <br>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">count</span> <span
                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(181,206,168)">0</span> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># python equivalent to
                static field in java; belongs to the class and not an instance</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(78,201,176)">Machine</span>.<span
                style="color:rgb(156,220,254)">count</span> <span style="color:rgb(212,212,212)">+=</span> <span
                style="color:rgb(181,206,168)">1</span></div><br>
        <div><span style="color:rgb(78,201,176)">Machine</span>()</div>
        <div><span style="color:rgb(78,201,176)">Machine</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">Machine</span>.<span
                style="color:rgb(156,220,254)">count</span>)</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                multiple inheritance "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Car</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">start</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Car starting"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Alarm</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">on</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Alarm on"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">SafeCar</span>(<span
                style="color:rgb(78,201,176)">Car</span>,<span style="color:rgb(78,201,176)">Alarm</span>): &nbsp;
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># multiple inheiritance; java would use an
                interface</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># in python, SafeCar 'is a' Car
                but not an Alarm</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; <span style="color:rgb(106,153,85)"># Alarm is considered a 'mixin': it's purpose is to add behavior
                to another class</span></div><br>
        <div><span style="color:rgb(156,220,254)">s</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">SafeCar</span>()</div>
        <div><span style="color:rgb(156,220,254)">s</span>.<span style="color:rgb(220,220,170)">start</span>()</div>
        <div><span style="color:rgb(156,220,254)">s</span>.<span style="color:rgb(220,220,170)">on</span>()</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- method
                resolution order "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">A</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">run</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Hello A"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">B</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">run</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Hello B"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">C</span>(<span
                style="color:rgb(78,201,176)">A</span>, <span style="color:rgb(78,201,176)">B</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">pass</span></div><br>
        <div><span style="color:rgb(156,220,254)">c</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">C</span>()</div>
        <div><span style="color:rgb(156,220,254)">c</span>.<span style="color:rgb(220,220,170)">run</span>() &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># which run() is called? From class A
                or B? Order is same as in constructor</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">C</span>.<span
                style="color:rgb(220,220,170)">mro</span>()) &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)">#
                display the method resolution order for class C</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                output: [&lt;class '__main__.C'&gt;, &lt;class '__main__.A'&gt;, &lt;class '__main__.B'&gt;, &lt;class
                'object'&gt;]</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                implementing operators "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">Word</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__init__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">text</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_text</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">text</span></div>
        <div>&nbsp; &nbsp; </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__str__</span>(<span style="color:rgb(156,220,254)">self</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(156,220,254)">self</span>.<span style="color:rgb(156,220,254)">_text</span></div>
        <div>&nbsp; &nbsp; </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__add__</span>(<span style="color:rgb(156,220,254)">self</span>, <span
                style="color:rgb(156,220,254)">other</span>):</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(78,201,176)">Word</span>(<span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_text</span> <span style="color:rgb(212,212,212)">+</span> <span
                style="color:rgb(156,220,254)">other</span>._text) &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># we can decide what this method does.</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># let's return a new word object</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span
                style="color:rgb(106,153,85)"># there are many existing operators you can override. check the python
                docs online</span></div>
        <div>&nbsp; &nbsp; </div>
        <div><span style="color:rgb(156,220,254)">w1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Word</span>(<span style="color:rgb(206,145,120)">"Hello "</span>)</div>
        <div><span style="color:rgb(156,220,254)">w2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">Word</span>(<span style="color:rgb(206,145,120)">"there"</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">w</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(156,220,254)">w1</span> <span style="color:rgb(220,220,170)">+</span> <span
                style="color:rgb(156,220,254)">w2</span> &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># the
                __add__() method is called</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">w</span>)</div>
        <div class="yj6qo"></div>
        <div class="adL"><br></div>
    </div>
</div>
  `

        const html2 = `
<div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                modules "</span>)</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- main
                functions "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">main</span>(): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># common
                convention: create a method main() to be run only if</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"Hello
                World"</span>) &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># you are running this
                file directly</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; <span style="color:rgb(106,153,85)"># main() will not be called if this code is imported as a
                module</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; <span style="color:rgb(106,153,85)"># in some other python code</span></div><br>
        <div><span style="color:rgb(197,134,192)">if</span> <span style="color:rgb(156,220,254)">__name__</span> <span
                style="color:rgb(212,212,212)">==</span> <span style="color:rgb(206,145,120)">'__main__'</span>: &nbsp;
            &nbsp;</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">main</span>()</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                loading parts of modules "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># from mymodule import value1, value2 &nbsp; &nbsp; &nbsp; # you can
                import just the fields or functions you want</span></div><br>
        <div><span style="color:rgb(106,153,85)"># print(value1)</span></div>
        <div><span style="color:rgb(106,153,85)"># print(value2)</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                packages "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># import stuff.greetings as gr</span></div>
        <div><span style="color:rgb(106,153,85)"># from stuff import greetings as gr &nbsp; &nbsp; &nbsp; &nbsp; #
                alternative</span></div>
        <div><span style="color:rgb(106,153,85)"># from stuff.greetings import greet &nbsp; &nbsp; &nbsp; &nbsp; #
                import just one function</span></div><br>
        <div><span style="color:rgb(106,153,85)">#gr.greet()</span></div>
        <div><span style="color:rgb(106,153,85)"># greet()</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                package initialization "</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># it is recommended: if you create a module, put a __init__.py file in
                it</span></div>
        <div><span style="color:rgb(106,153,85)"># not mandatory, but recommended</span></div>
        <div><span style="color:rgb(106,153,85)"># any code in this file will be run during package
                initialization</span></div><br>
        <div><span style="color:rgb(106,153,85)"># __all__ is a special python variable; can set it to a list of things
                that should be</span></div>
        <div><span style="color:rgb(106,153,85)"># part of the namespace when the package is loaded as *</span></div>
        <br>
        <div><span style="color:rgb(106,153,85)"># if have a folder called 'stuff' and the __init__.py contains:</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># __all__ = ['greetings']</span></div>
        <div><span style="color:rgb(106,153,85)"># which refers to the python module/file 'greetings.py'</span></div>
        <br>
        <div><span style="color:rgb(106,153,85)"># so can now use:</span></div>
        <div><span style="color:rgb(106,153,85)"># from stuff import * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # import
                __all__ = ['greetings']</span></div>
        <div><span style="color:rgb(106,153,85)"># greetings.greet() &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; # call a
                method 'greet()' defined in file greetings.py</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- how
                python locates modules "</span>)</div><br>
        <div><span style="color:rgb(197,134,192)">import</span> <span style="color:rgb(78,201,176)">sys</span></div>
        <div><span style="color:rgb(106,153,85)"># import stuff.greetings as gr</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(215,186,125)">\n</span><span style="color:rgb(206,145,120)">"</span>.<span
                style="color:rgb(220,220,170)">join</span>(<span style="color:rgb(78,201,176)">sys</span>.<span
                style="color:rgb(156,220,254)">path</span>)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
                style="color:rgb(106,153,85)"># use sys.path to show the list of directories python</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># will use to search for
                modules</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># tip: use .join to add a newline to
                the start of each item</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># in the iterable list
                sys.path</span></div><br>
        <div><span style="color:rgb(106,153,85)"># print("Greetings: ", gr.__file__) &nbsp; &nbsp; &nbsp; # python
                variable, will print the location of this module</span></div><br><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                inspecting modules "</span>)</div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">dir</span>()) <span
                style="color:rgb(106,153,85)"># will print all the fields/methods visible in this scope</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">dir</span>(<span
                style="color:rgb(78,201,176)">sys</span>)) <span style="color:rgb(106,153,85)"># will print all the
                fields/methods visible in this module/package</span></div><br>
        <div><span style="color:rgb(106,153,85)"># if want to look at only local variables:</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(220,220,170)">locals</span>())
        </div><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"</span><span
                style="color:rgb(215,186,125)">\n</span><span style="color:rgb(206,145,120)">"</span>.<span
                style="color:rgb(220,220,170)">join</span>(<span style="color:rgb(220,220,170)">locals</span>()))</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                subpackages "</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># from level1.level2.mymodule import PI</span></div>
        <div><span style="color:rgb(106,153,85)"># print(PI)</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                package attributes "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># chaining import attributes</span></div><br>
        <div><span style="color:rgb(106,153,85)"># import level1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; # inside level1, put an __init__ file that </span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># contains: from . import
                level2</span></div><br>
        <div><span style="color:rgb(106,153,85)"># print(dir(level1.level2)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #
                inside level2, put an __init__ file that </span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># contains: from . import
                mymodule</span></div><br>
        <div><span style="color:rgb(106,153,85)">#
                print(level1.level2.mymodule.<wbr>PI) &nbsp; &nbsp; &nbsp;# now you can access this var with only using the import statement:</span>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># import level1</span></div>
        <br><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                installing packages "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># can use pip to install python packages</span></div>
        <div><span style="color:rgb(106,153,85)"># eg. pip install numpy</span></div><br>
        <div><span style="color:rgb(106,153,85)"># can use poetry</span></div>
        <div class="yj6qo ajU">
            <div id=":wk" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
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
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                iterators "</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># to make a class iterable, need to define 2 methods: __iter__ and
                __next__</span></div><br>
        <div><span style="color:rgb(86,156,214)">class</span> <span style="color:rgb(78,201,176)">PowersOfTwo</span>:
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__iter__</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># method is only called once before
                iteration starts</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_value</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(181,206,168)">1</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(156,220,254)">self</span></div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(86,156,214)">def</span> <span
                style="color:rgb(220,220,170)">__next__</span>(<span style="color:rgb(156,220,254)">self</span>): &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># called each loop to determine the
                next value</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(156,220,254)">self</span>.<span
                style="color:rgb(156,220,254)">_value</span> <span style="color:rgb(212,212,212)">*=</span> <span
                style="color:rgb(181,206,168)">2</span></div><br>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">if</span> <span
                style="color:rgb(156,220,254)">self</span>.<span style="color:rgb(156,220,254)">_value</span> <span
                style="color:rgb(212,212,212)">&gt;</span> <span style="color:rgb(181,206,168)">10</span>:</div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">raise</span> <span
                style="color:rgb(78,201,176)">StopIteration</span> &nbsp; &nbsp; <span style="color:rgb(106,153,85)">#
                prevent an infinite loop</span></div><br>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
                style="color:rgb(156,220,254)">self</span>.<span style="color:rgb(156,220,254)">_value</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:rgb(106,153,85)"># return next value in the sequence</span>
        </div><br>
        <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                style="color:rgb(220,220,170)">in</span> <span style="color:rgb(78,201,176)">PowersOfTwo</span>():</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">i</span>)</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                passing functions to functions "</span>)</div><br><br>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">greet</span>():</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(206,145,120)">"Hello"</span>)</div><br>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">run</span>(<span
                style="color:rgb(156,220,254)">func</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">func</span>()</div><br>
        <div><span style="color:rgb(106,153,85)"># example of passing a function to a function</span></div>
        <div><span style="color:rgb(220,220,170)">run</span>(<span style="color:rgb(220,220,170)">greet</span>)</div>
        <br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                mapping "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span> [<span
                style="color:rgb(206,145,120)">"Dog"</span>, <span style="color:rgb(206,145,120)">"cat"</span>, <span
                style="color:rgb(206,145,120)">"ELEPHANT"</span>, <span style="color:rgb(206,145,120)">"Badger"</span>]
        </div><br>
        <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">map</span>(<span style="color:rgb(78,201,176)">str</span>.<span
                style="color:rgb(220,220,170)">lower</span>, <span style="color:rgb(156,220,254)">animals1</span>)
            &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># first arg takes a method that takes a single item and
                returns an item</span></div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(106,153,85)"># second arg is the list to work
                on</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">animals2</span>)
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">animals2</span>))</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">list</span>(<span
                style="color:rgb(156,220,254)">animals2</span>))</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- lambda
                expressions "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span> [<span
                style="color:rgb(206,145,120)">"Dog"</span>, <span style="color:rgb(206,145,120)">"cat"</span>, <span
                style="color:rgb(206,145,120)">"ELEPHANT"</span>, <span style="color:rgb(206,145,120)">"Badger"</span>]
        </div><br>
        <div><span style="color:rgb(106,153,85)"># example lambda expression</span></div>
        <div><span style="color:rgb(106,153,85)"># here we iterate over the collection and keep the first 3 letters
                (lower case) for each item</span></div>
        <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">map</span>(<span style="color:rgb(86,156,214)">lambda</span> <span
                style="color:rgb(156,220,254)">s</span>: <span style="color:rgb(156,220,254)">s</span>[:<span
                style="color:rgb(181,206,168)">3</span>].<span style="color:rgb(220,220,170)">lower</span>(), <span
                style="color:rgb(156,220,254)">animals1</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">list</span>(<span
                style="color:rgb(156,220,254)">animals2</span>))</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                lambdas in loops "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">funcs</span> <span style="color:rgb(212,212,212)">=</span> []</div>
        <br>
        <div><span style="color:rgb(106,153,85)"># need to watch out when using lambda functions in loops.</span></div>
        <div><span style="color:rgb(106,153,85)"># this example fixes the issue</span></div>
        <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(78,201,176)">range</span>(<span
                style="color:rgb(181,206,168)">5</span>):</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">funcs</span>.<span
                style="color:rgb(220,220,170)">append</span>(<span style="color:rgb(86,156,214)">lambda</span> <span
                style="color:rgb(156,220,254)">i</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(156,220,254)">i</span>: <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">i</span>))</div><br>
        <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">f</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(156,220,254)">funcs</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">f</span>()</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                sorting "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">animals1</span> <span style="color:rgb(212,212,212)">=</span> (<span
                style="color:rgb(206,145,120)">"dog"</span>, <span style="color:rgb(206,145,120)">"giraffe"</span>,
            <span style="color:rgb(206,145,120)">"elephant"</span>, <span style="color:rgb(206,145,120)">"tiger"</span>,
            <span style="color:rgb(206,145,120)">"lion"</span>)
        </div><br>
        <div><span style="color:rgb(106,153,85)"># can provide a lambda function to customize how the sort is
                done</span></div>
        <div><span style="color:rgb(156,220,254)">animals2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(220,220,170)">sorted</span>(<span style="color:rgb(156,220,254)">animals1</span>, <span
                style="color:rgb(156,220,254)">reverse</span><span style="color:rgb(212,212,212)">=</span><span
                style="color:rgb(86,156,214)">True</span>, <span style="color:rgb(156,220,254)">key</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(86,156,214)">lambda</span> <span
                style="color:rgb(156,220,254)">s</span>: <span style="color:rgb(220,220,170)">len</span>(<span
                style="color:rgb(156,220,254)">s</span>))</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">animals2</span>)
        </div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                filtering "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span> [<span
                style="color:rgb(206,145,120)">"apple"</span>, <span style="color:rgb(206,145,120)">"orange"</span>,
            <span style="color:rgb(206,145,120)">"banana"</span>, <span style="color:rgb(206,145,120)">"grape"</span>,
            <span style="color:rgb(206,145,120)">"pear"</span>]
        </div><br>
        <div><span style="color:rgb(106,153,85)"># built-in function 'filter' takes a function as 1st arg, list as
                second arg</span></div>
        <div><span style="color:rgb(106,153,85)"># here we provide a lambda function, if the string has an 'e' then it
                is allowed</span></div>
        <div><span style="color:rgb(156,220,254)">fruits</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">filter</span>(<span style="color:rgb(86,156,214)">lambda</span> <span
                style="color:rgb(156,220,254)">s</span>: <span style="color:rgb(206,145,120)">"e"</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(156,220,254)">s</span>, <span
                style="color:rgb(156,220,254)">fruits</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">list</span>(<span
                style="color:rgb(156,220,254)">fruits</span>))</div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                generators "</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># letters is a list comprehension</span></div>
        <div><span style="color:rgb(106,153,85)"># chr returns a char representation of a number</span></div>
        <div><span style="color:rgb(106,153,85)"># if use [] we get a list of chars A-Z</span></div>
        <div><span style="color:rgb(156,220,254)">letters</span> <span style="color:rgb(212,212,212)">=</span> [<span
                style="color:rgb(220,220,170)">chr</span>(<span style="color:rgb(156,220,254)">x</span>) <span
                style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(78,201,176)">range</span>(<span
                style="color:rgb(181,206,168)">65</span>, <span style="color:rgb(181,206,168)">91</span>)]</div><br>
        <div><span style="color:rgb(106,153,85)"># if we use () the return value is actually a generator object</span>
        </div>
        <div><span style="color:rgb(106,153,85)"># makes it easier to process the values one at a time</span></div>
        <div><span style="color:rgb(106,153,85)"># advantage is that the list is not created up front. They are
                generated as you need them.</span></div>
        <div><span style="color:rgb(156,220,254)">letters</span> <span style="color:rgb(212,212,212)">=</span> (<span
                style="color:rgb(220,220,170)">chr</span>(<span style="color:rgb(156,220,254)">x</span>) <span
                style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(78,201,176)">range</span>(<span
                style="color:rgb(181,206,168)">65</span>, <span style="color:rgb(181,206,168)">91</span>))</div><br>
        <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">s</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(156,220,254)">letters</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">s</span>, <span style="color:rgb(156,220,254)">end</span><span
                style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">" "</span>) &nbsp; <span
                style="color:rgb(106,153,85)"># instead of the default newline char at the end of the print(), use a
                space instead (to get the string all in one line)</span></div><br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                function generators "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># to iterate over a collection (without overriding the __iter__ and
                __next__ methods)</span></div>
        <div><span style="color:rgb(106,153,85)"># can use a function generator instead.</span></div>
        <div><span style="color:rgb(106,153,85)"># 'yield' is similar to 'return' except it returns one item at a time,
                to make it easy to iterate over the list</span></div><br>
        <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(78,201,176)">PowersOfTwo</span>():
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">i</span>
            <span style="color:rgb(197,134,192)">in</span> <span style="color:rgb(78,201,176)">range</span>(<span
                style="color:rgb(181,206,168)">8</span>):
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color:rgb(197,134,192)">yield</span> <span
                style="color:rgb(181,206,168)">2</span><span style="color:rgb(212,212,212)">**</span><span
                style="color:rgb(156,220,254)">i</span></div><br>
        <div><span style="color:rgb(197,134,192)">for</span> <span style="color:rgb(156,220,254)">x</span> <span
                style="color:rgb(197,134,192)">in</span> <span style="color:rgb(78,201,176)">PowersOfTwo</span>():</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">x</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># type is: 'generator'</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(78,201,176)">PowersOfTwo</span>()))</div><br><br><br>
        <div><span style="color:rgb(106,153,85)"># --------------------</span></div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">list</span>((<span
                style="color:rgb(86,156,214)">lambda</span> <span style="color:rgb(156,220,254)">y</span>: <span
                style="color:rgb(78,201,176)">range</span>(<span style="color:rgb(156,220,254)">y</span>))(<span
                style="color:rgb(181,206,168)">4</span>)))</div>
        <div class="yj6qo ajU">
            <div id=":11s" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content"
                aria-label="Show trimmed content" aria-expanded="false"><img class="ajT"
                    src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div>
        </div>
        <div class="adL"><br></div>
    </div>
</div>
  `

        const html4 = `
  <div dir="ltr">
    <div style="color:rgb(204,204,204);font-family:monospace;font-size:13px;line-height:17px;">
        <div class="adM"><br></div>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                reading text files "</span>)</div><br><br>
        <div><span style="color:rgb(106,153,85)"># file = open("test.txt")</span></div>
        <div><span style="color:rgb(106,153,85)"># #lines = file.readlines()</span></div>
        <div><span style="color:rgb(106,153,85)"># lines = file.read().splitlines()</span></div>
        <div><span style="color:rgb(106,153,85)"># print(lines)</span></div>
        <div><span style="color:rgb(106,153,85)"># file.close()</span></div><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ---------- using
                with "</span>)</div><br>
        <div><span style="color:rgb(106,153,85)"># use 'with' to ensure the file is closed after</span></div>
        <div><span style="color:rgb(197,134,192)">with</span> <span style="color:rgb(220,220,170)">open</span>(<span
                style="color:rgb(206,145,120)">"test.txt"</span>) <span style="color:rgb(197,134,192)">as</span> <span
                style="color:rgb(156,220,254)">file</span>:</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">lines</span> <span
                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">file</span>.<span
                style="color:rgb(220,220,170)">readlines</span>()</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">lines</span>)</div><br>
        <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># __enter__</span></div>
        <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># __exit__</span></div><br>
        <div><span style="color:rgb(106,153,85)"># you can use 'with' on your custom object/class by implementing the
                __enter__ and __exit__</span></div>
        <div><span style="color:rgb(106,153,85)"># methods (which are called upon entry and exit)</span></div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                writing files "</span>)</div><br>
        <div><span style="color:rgb(197,134,192)">with</span> <span style="color:rgb(220,220,170)">open</span>(<span
                style="color:rgb(206,145,120)">"temp.txt"</span>, <span style="color:rgb(206,145,120)">"wt"</span>)
            <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">file</span>: &nbsp;
            &nbsp;<span style="color:rgb(106,153,85)"># second arg 'wt' stands for 'write' and 'text' mode</span>
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                style="color:rgb(220,220,170)">write</span>(<span style="color:rgb(206,145,120)">"one</span><span
                style="color:rgb(215,186,125)">\n</span><span style="color:rgb(206,145,120)">two"</span>)</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                representing binary data "</span>)</div><br>
        <div><span style="color:rgb(156,220,254)">data1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(86,156,214)">b</span><span style="color:rgb(206,145,120)">'Hello'</span> &nbsp; &nbsp;
            <span style="color:rgb(106,153,85)"># b is for bytes</span>
        </div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">data1</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">data1</span>))</div><br>
        <div><span style="color:rgb(156,220,254)">data2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">bytearray</span>([<span style="color:rgb(86,156,214)">0x</span><span
                style="color:rgb(181,206,168)">FF</span>, <span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>, <span
                style="color:rgb(181,206,168)">4</span>]) <span style="color:rgb(106,153,85)"># 0x means hexadecimal so
                0xFF = 255</span></div><br>
        <div><span style="color:rgb(106,153,85)"># note: bytes are immutable but bytearray can be modified</span></div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                writing binary files "</span>)</div><br><br>
        <div><span style="color:rgb(156,220,254)">data1</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(86,156,214)">b</span><span style="color:rgb(206,145,120)">'Hello'</span></div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">data1</span>)</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(78,201,176)">type</span>(<span
                style="color:rgb(156,220,254)">data1</span>))</div><br>
        <div><span style="color:rgb(156,220,254)">data2</span> <span style="color:rgb(212,212,212)">=</span> <span
                style="color:rgb(78,201,176)">bytearray</span>([<span style="color:rgb(86,156,214)">0x</span><span
                style="color:rgb(181,206,168)">FF</span>, <span style="color:rgb(181,206,168)">1</span>, <span
                style="color:rgb(181,206,168)">2</span>, <span style="color:rgb(181,206,168)">3</span>, <span
                style="color:rgb(181,206,168)">4</span>])</div><br>
        <div><span style="color:rgb(197,134,192)">with</span> <span style="color:rgb(220,220,170)">open</span>(<span
                style="color:rgb(206,145,120)">'test1.bin'</span>, <span style="color:rgb(206,145,120)">'wb'</span>)
            <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">file</span>: &nbsp;<span
                style="color:rgb(106,153,85)"># 'wb' stands for 'write' and 'binary' mode</span>
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                style="color:rgb(220,220,170)">write</span>(<span style="color:rgb(156,220,254)">data1</span>)</div><br>
        <div><span style="color:rgb(197,134,192)">with</span> <span style="color:rgb(220,220,170)">open</span>(<span
                style="color:rgb(206,145,120)">'test2.bin'</span>, <span style="color:rgb(206,145,120)">'wb'</span>)
            <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">file</span>:
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">file</span>.<span
                style="color:rgb(220,220,170)">write</span>(<span style="color:rgb(156,220,254)">data2</span>)</div>
        <br><br><br>
        <div><span style="color:rgb(220,220,170)">print</span>()</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(206,145,120)">"# ----------
                reading binary files "</span>)</div><br>
        <div><span style="color:rgb(197,134,192)">with</span> <span style="color:rgb(220,220,170)">open</span>(<span
                style="color:rgb(206,145,120)">'test2.bin'</span>, <span style="color:rgb(206,145,120)">'rb'</span>)
            <span style="color:rgb(197,134,192)">as</span> <span style="color:rgb(156,220,254)">file</span>:
        </div>
        <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">data</span> <span
                style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">file</span>.<span
                style="color:rgb(220,220,170)">read</span>(<span style="color:rgb(181,206,168)">5</span>)</div>
        <div>&nbsp; &nbsp; <span style="color:rgb(220,220,170)">print</span>(<span
                style="color:rgb(156,220,254)">data</span>)</div><br>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">data</span>[<span
                style="color:rgb(181,206,168)">0</span>])</div>
        <div><span style="color:rgb(220,220,170)">print</span>(<span style="color:rgb(156,220,254)">data</span>[<span
                style="color:rgb(181,206,168)">1</span>])</div>
        <div class="yj6qo"></div>
        <div class="adL"><br><br></div>
    </div>
</div>
  `

        return (
                <>
                        <MathJaxContext>
                                <div className='mt-[0px] ml-[40px] mr-[20px] mb-[10px]'>

                                        <div className='jade-h1'>
                                                Python for Java Developers
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 2: Classes & Modules
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Classes" isChecked={true}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Modules" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Functional Programming" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html3)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="File Handling" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='flex-1 jade-code min-w-[1000px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html4)} />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>



                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
