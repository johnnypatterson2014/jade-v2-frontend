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
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
          <div><span style="color:rgb(86,156,214)">def</span> <span style="color:rgb(220,220,170)">center_data</span>(<span
              style="color:rgb(156,220,254)">my_dataset</span>):</div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># input: my_dataset has type: ndarray</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># take the avg/mean for each column of data. Use float64 for
              increased accuracy</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">avg_of_each_col_vector</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">np</span>.mean(<span
              style="color:rgb(156,220,254)">my_dataset</span>, <span style="color:rgb(156,220,254)">axis</span><span
              style="color:rgb(212,212,212)">=</span><span style="color:rgb(181,206,168)">0</span>, <span
              style="color:rgb(156,220,254)">dtype</span><span style="color:rgb(212,212,212)">=</span><span
              style="color:rgb(78,201,176)">np</span>.float64)</div><br>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># we want the resulting matrix to be the (row value - avg
              value) for each column</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># to make the subtraction easier to do, create a matrix of
              the avg values </span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># with same size/shape as the dataset (same num of rows as
              original dataset)</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">matrix_of_avg_values</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">np</span>.repeat(<span
              style="color:rgb(156,220,254)">avg_of_each_col_<wbr>vector</span>, <span
              style="color:rgb(220,220,170)">len</span>(<span style="color:rgb(156,220,254)">my_dataset</span>))</div><br>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># np.repeat returns a flattened matrix (all values in a
              single row), so we need to reshape it</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">matrix_of_avg_values</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">np</span>.reshape(<span
              style="color:rgb(156,220,254)">matrix_of_avg_<wbr>values</span>, <span
              style="color:rgb(156,220,254)">my_dataset</span>.shape, <span style="color:rgb(156,220,254)">order</span><span
              style="color:rgb(212,212,212)">=</span><span style="color:rgb(206,145,120)">'F'</span>)</div>
          <div>&nbsp; &nbsp; </div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># subtract the avg value from each cell in the data</span>
          </div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">matrix_centered_data</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">my_dataset</span> <span
              style="color:rgb(212,212,212)">-</span> <span style="color:rgb(156,220,254)">matrix_of_avg_values</span></div>
          <br>
          <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
              style="color:rgb(156,220,254)">matrix_centered_data</span></div>
        </div>
      </div>
        `

        const html2 = `
        <div dir="ltr">
        <div style="color:rgb(204,204,204);font-family:monospace;font-size:14px;line-height:18px;">
          <div><span style="color:rgb(86,156,214)">def</span> <span
              style="color:rgb(220,220,170)">covariance_matrix</span>(<span
              style="color:rgb(156,220,254)">centered_<wbr>matrix_data</span>):</div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># input: centered_matrix_data (type: np.ndarray)</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># output: the covariance matrix (type: np.ndarray)</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(106,153,85)"># cov matrix = (1/n-1) * the dot product of matrix A with it's transpose</span></div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">cov_matrix</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(78,201,176)">np</span>.dot(<span
              style="color:rgb(79,193,255)">X</span>.T, <span style="color:rgb(79,193,255)">X</span>)</div>
          <div>&nbsp; &nbsp; <span style="color:rgb(156,220,254)">cov_matrix</span> <span
              style="color:rgb(212,212,212)">=</span> <span style="color:rgb(156,220,254)">cov_matrix</span> <span
              style="color:rgb(212,212,212)">/</span> (<span style="color:rgb(220,220,170)">len</span>(<span
              style="color:rgb(79,193,255)">X</span>) <span style="color:rgb(212,212,212)">-</span> <span
              style="color:rgb(181,206,168)">1</span>)</div>
          <div>&nbsp; &nbsp; <span style="color:rgb(197,134,192)">return</span> <span
              style="color:rgb(156,220,254)">cov_matrix</span></div>
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
                                                Math for Machine Learning and Data Science
                                        </div>

                                        <div className='jade-h2 mb-[25px]'>
                                                Week 4: Determinants & eigenvectors
                                        </div>

                                        <Tabs>
                                                <Tab2 title="Determinants" isChecked={true}>
                                                        <TileRowCell0>

                                                                <h1 className='no-top-margin'>Determinants</h1>

                                                                <ul className='list-disc ml-[25px]'>
                                                                        <li>
                                                                                handy way to determine if a matrix is singular or not
                                                                        </li>
                                                                        <li>
                                                                                only works for square matricies
                                                                        </li>
                                                                        <li>
                                                                                ignore B (free coefficients) since they do not affect singularity
                                                                        </li>
                                                                        <li>
                                                                                if the determinant is non-zero then it is non-singular (one unique solution)
                                                                        </li>
                                                                        <li>
                                                                                if the determinant is zero then it is singular (infinite or zero solutions)
                                                                        </li>
                                                                        <li>
                                                                                if have 2x2 matrix:

                                                                                <div className="ml-[20px]">
                                                                                        [ a b ] then the determinant is: ad - bc (diagonal to right - diagonal to left)<br />
                                                                                        [ b c ] <br /><br />
                                                                                </div>
                                                                        </li>
                                                                        <li>
                                                                                for 3x3 matrix:
                                                                                <div className="ml-[20px]">
                                                                                        [ a b c ]  then determinant = (diagonals to right) - (diagonals to left)<br />
                                                                                        [ d e f ] <br />
                                                                                        [ g h i ]       determinant = (aei + bfg + dhc) - (ceg + bdi + fha) <br /><br />

                                                                                        Note: a zero in the matrix makes it easier to calculate (the factor of vars = 0)<br /><br />
                                                                                        note: if the matrix is **upper triangular** (values below the diagonal are zero) then <br />
                                                                                        the determinant is simply the diagonal terms multiplied together (ie. a*e*i)
                                                                                </div>
                                                                        </li>

                                                                </ul>

                                                                <h1>Visual representation of Determinant</h1>

                                                                <p>
                                                                        From a visual perspective, the determinant of a matrix A, is the area inside a
                                                                        parallelogram resulting from the transformation of matrix A on
                                                                        the basis vectors [1 0] and [0 1].
                                                                </p>

                                                                <div className='flex-none w-[355px] justify-items-center bg-zinc-200 p-[10px]'>
                                                                        <img width='350px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAAGfCAYAAAAUBHZmAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjMuNCwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8QVMy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAjrElEQVR4nO3de3RV9Z338c/35H4jXJJAEgkXQVAEUWOLaBEvaL20anXU1jrq+Miy1qfT1mWnOtOOtjNjZ8aptaOtQ32m+ugstdanaKsWb1RbFRWVIpS7codwSbiEkPvv+SMJBBIgJHuf/dsn79daWZh9ds7vewTyZp+9z4k55wQAgC8SUQ8AAEBnhAkA4BXCBADwCmECAHiFMAEAvJIe9QCdFRUVuZEjR0Y9BgAgZB988ME251xxd7d5FaaRI0dq/vz5UY8BAAiZma051G08lQcA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8ErgYTKzu83MHfSxOeh1AACpKT2k+10maXqnz1tCWgcAkGLCClOzc46jJADAUQvrHNNoM9tgZp+a2VNmNjqkdQAAKSaMML0r6QZJF0q6WdIwSW+b2ZDudjazmWY238zmb926NYRxAABxYs65cBcwy5f0iaQfOed+fLh9Kysr3fz580OdBwAQPTP7wDlX2d1toV8u7pyrlbRY0tiw1wIAxF/oYTKzbEnjJW0Key0AQPyF8Tqm+8zsLDMbZWaflfRrSXmSHgt6LQBA6gnjcvFjJD0pqUjSVknzJE1xzq0JYS0AQIoJPEzOuWuCvk8AQP/Be+UBALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvECYAgFcIEwDAK4QJAOAVwgQA8AphAgB4hTABALxCmAAAXiFMAACvhB4mM7vLzJyZPRj2WgCA+As1TGY2RdLNkhaGuQ4AIHWEFiYzK5T0P5JuklQT1joAgNQS5hHTLEm/ds69HuIaAIAUkx7GnZrZzZLGSLquB/vOlDRTkioqKsIYBwAQI4EfMZnZOEn/Iula51zjkfZ3zs1yzlU65yqLi4uDHgcAEDNhHDGdLqlI0iIz69iWJmmamd0iKc851xDCugCAFBBGmGZLmn/Qtl9KWqG2I6kjHkUBAPqvwMPknNshaUfnbWa2R1K1c25R0OsBAFIL7/wAAPBKKFflHcw5Nz0Z6wAA4o8jJgCAVwgTAMArhAkA4BXCBADwCmECAHiFMAEAvEKYAABeIUwAAK8QJgCAVwgTAMArhAkA4BXCBADwCmECAHiFMAEAvEKYAABeIUwAAK8QJgCAVwgTAMArhAkA4BXCBADwCmECAHiFMAEAvEKYAABeIUwAAK8QJgCAVwgTAMArhAkA4BXCBADwCmECAHiFMAEAvEKYAABeIUwAAK8QJgCAVwgTAMArhAkA4BXCBADwCmECAHiFMAEAvEKYAABeIUwAAK8QJgCAVwgTAMArhAkA4BXCBADwSuBhMrOvm9lCM9vV/vGOmV0c9DoAgNQUxhHTekl/J+kUSZWSXpc028wmhbAWACDFBB4m59xzzrmXnHMrnXPLnXN/L2m3pNODXgsAUpVradauNe+rvmZd1KMkXXqYd25maZL+SlK+pLcPsc9MSTMlqaKiIsxxAMBrrqVZu9fOV82yV1WzYq5a9u7UkIlf1MgLvx/1aEkVSpjMbKKkdyRlS6qVdLlz7uPu9nXOzZI0S5IqKytdGPMAgK+6i1GH7KJjVT7ttgini0ZYR0zLJE2WNFDSFZIeM7PpzrlFIa0HALHRXYwSGbkaOGaa0nMHasuHv1L2kFE67uqfKyNvcNTjJl0oYXLONUpa2f7pfDM7TdK3JN0UxnoA4LvDxWjQ+PM0YOQU1W78WCuf/Wa/jpIU8jmmThKSspK0FgB4oScxSmRkS5J2rXlfK5/9prIGHtOvoySFECYz+5GkFyStk1Qg6SuSpkvitUwAUt7RxKgDUTpQGEdMwyQ90f7rTkkLJV3onJsTwloAELnexKgDUeoq8DA5524I+j4BwDd9iVEHotS9ZJ1jAoDYCyJGHYjSoREmADiMIGPUgSgdHmECgIOEEaMOROnICBMAKNwYdSBKPUOYAPRbyYhRB6LUc4QJQL+SzBh1IEpHhzABSHlRxKgDUTp6hAlASooyRh2IUu8QJgApw4cYdSBKvUeYAMSaTzHqQJT6hjABiB0fY9SBKPUdYQIQCz7HqANRCgZhAuCtOMSoA1EKDmEC4JU4xagDUQoWYQIQuTjGqANRCh5hAhCJOMeoA1EKB2ECkDSpEKMORCk8hAlAqFIpRh2IUrgIE4DApWKMOhCl8BEmAIFI5Rh1IErJQZgA9Fp/iFEHopQ8hAnAUelPMepAlJKLMAE4ov4Yow5EKfkIE4Bu9ecYdSBK0SBMAPYhRvsRpegQJqCfI0ZdEaVoESagHyJGh0aUokeYgH6CGB0ZUfIDYQJSGDHqOaLkD8IEpBhidPSIkl8IE5ACiFHvESX/ECYgpohR3xElPxEmIEaIUXCIkr8IE+A5YhQ8ouQ3wgR4iBiFhyj5jzABniBG4SNK8UCYgAgRo+QhSvFBmIAkI0bJR5TihTABSUCMokOU4ocwASEhRtEjSvFEmIAAESN/EKX4IkxAHxEj/xCleCNMQC8QI38RpfgLPExmdqekL0kaJ6lB0jxJdzrnFgW9FpBMxMh/RCk1hHHENF3SzyS9L8kk/UDSq2Z2gnOuOoT1gNAQo/ggSqkj8DA55y7o/LmZXSdpp6QzJP026PWAoBGj+CFKqSUZ55gKJCUk1SRhLaBPnHNa9MiX1LhzIzGKCaKUepIRpgckLZD0Tnc3mtlMSTMlqaKiIgnjAN1rrt+tqncfU+7Q8Rp+zreJUQwQpdQUapjM7MeSzpR0pnOupbt9nHOzJM2SpMrKShfmPEB3WpsbtPXDZ7Rp3n/L0jJ04s2zlZaZE/VYOAKilLpCC5OZ3S/pGklnO+c+CWsdoLdca4u2L35RG//0sJp2V0mSKmZ8lyjFAFFKbaGEycweUFuUpjvnloaxBtBbzjntXPUnbXjzP1W/bf+/mbIGVaho0mXRDYYeIUqpLxH0HZrZQ5JulPRlSTVmNqz9Iz/otYCjVbthoZY/OVOr/t+3DoiSJJV/7lZZWnJfc95cv0t/fvB8NdSsD+T+Vs3+jqrefyKQ+/IRUeofwvhbeGv7r68dtP0eSXeHsB5wRHu3f6qNbz6kHSv+0O3tucNO0MBx5wa23q5P52nFM7cddp+RF9+jvVtWqnD0GcoadEwg65adMVPLnpypokmXKS0rtf4tSJT6jzBex2RB3yfQW60tTVo/935t/ejXkms95H7HnPUNmQX3Rzf/mMmadOvv932+5PHrNXj8DA097av7tiUysrXu1fs05or7A1s3p3iMsgrLtX3xiyo55arA7jdqRKl/4b3ykNISaRkq/9ytyi+bpG0LZ2v32vld9hkwaqoKRlQGu25G9r5LzVsaatW0e4vyyk9SRn7Rvn1qlr0qWUJ55Sd1+frG3Vu04c0HtXPVW5JrUcGI01Qx47vKyBtyxLULx0xT9ZI5KRMmotT/BH6OCfBNWla+Boycoua9O7q51VR+1uGfcuurus1LJTnlDTv+gO216xcod9j4LkdqDTs2aMljX1VmfonGXfuIjrvmv9Rct1NrX763R+vllU5Q3abFam2qD+ohRIYo9U+ECSmvuW6Hlj99i/ZuXSlJssT+JwoGn/B55ZYcF+r6e6qWKC2nUJkDhh2wvWHnJmXkFXXZf+3L96po0qUqP+s25QwZpdyh41Q69SbtWvO+JGnls9/SggfO1qrZ3+l2vYz8YrnWZjXVbgv+wSQRUeq/eCoPKe3gKKVl5WvMlT/Vyme/pdbGPSo785bQZ6irWqrcoeO7bHfNDUoc9M22cddm7Vo9T7vXf6QtHzy1f1/XqkR621ODQyuvVdFJl2v7ot91u14iPUuS1Noc3yMmotS/ESakrO6iNPaqh5RXOkGDjjtbiYwcZQ0sD32OuqqlGjT27C7b03MGqqV+90H7LlMiM0/HX9/1ku9EWoYkqWBEZbfnyjq01O9qu//cQX0ZOzJECYQJKelwUZKkIRO/oKxB4b83Y0tjnRpq1nV7xJQzdJy2LzrwDfctLV2tTfXKyBuitMzcXq25d9tKZeQX9+hCCd8QJUicY0IKOlKUJCm//CRlJOGIoq5qmeRauw1T4ajTVb999QEXZeSVTVR6doFWv/B91VUtVUPNeu1aPU9rX/lXucNc7t5Z7foFGjDq9KAeQtIQJXQgTEgpPYlSMtVVLVVaVr4yu3nKMKd4jPJKJ6h6ycv7tqVnD9CYK3+qloZaLX/qFv3l0a9o/dwHlFFQIrMj/3VtbW5QzfK5Kjrp8kAfR9iIEjrjqTykDN+iJElDK7+soZVfPuTtpVNv1rrX7lPx5CtkiTRJUl7pCTrumod7td62hc8pr+xE5ZdN7NXXR4Eo4WCECSnBxyj1ROHoqWqouUqNu7coq7C0R1+z/OlbtXfLcrU07dXCn12k0Zf+SPnlkyS1XQpfce4dYY4cKKKE7phz/vwIpMrKSjd//qGvNgK6E9co9XdEqX8zsw+cc92+5QrnmBBrRCmeiBIOhzAhtohSPBElHAlhQiwRpXgiSugJwoTYIUrxRJTQU4QJsUKU4oko4WgQJsQGUYonooSjRZgQC0QpnogSeoMwwXtEKZ6IEnqLMMFrRCmeiBL6gjDBW0QpnogS+oowwUtEKZ6IEoJAmOAdohRPRAlBIUzwClGKJ6KEIBEmeIMoxRNRQtAIE7xAlOKJKCEMhAmRI0rxRJQQFsKESBGleCJKCBNhQmSIUjwRJYSNMCESRCmeiBKSgTAh6YhSPBElJAthQlIRpXgiSkim9KgH6G827tmrH87/WK+s26wW5zStrET/PvVkleRkRz1a6IhSPBElJBtHTEm0ZvcenTP7VZXm5uiFS6br+YvOUnV9g25/68OoRwsdUYonooQocMSURLe/9aGuHTdS36ucuH/b5ON1/WvvaENtnb72xnvaWt+gjERCd5x8gr4wsjzCaYNDlOKJKCEqhClJ1tfWae6GKs3bvE2/WLxy3/YW55STnq60hOmfp0zWxCEDtXVvvc557jWde8xQ5abH+7eIKMUTUUKU4v1dL0Y+3r5DBRnpev2y87rclplIaFhujobl5kiSinOyNTAzU9X1jcrNj+9vEVGKJ6KEqMX3u17MZCRMdc0tKsnJVn7G4f+3f7S1Wk2trSrPy0nSdMEjSvFElOADLn5IksqSIRqYlaGvvfGeFm6r0ae7ajV3Q5XuePsjtTq3b7/q+gbd+ub7+unnTpWZRThx7xGleCJK8AVHTEkyMCtTT59/pu5+/2Nd+tKbanFOIwvydPno4Uq0B6ihpUV//eo7+uak8frM0KKIJ+4dohRPRAk+IUxJdHLxYD130Vnd3uac021vztfnyop19dgRSZ4sGEQpnogSfEOYPPFu1Xb95pN1mjC4UC+u2ShJ+vlZn9EJgwsjnqxniFI8ESX4iDB5YsqwIm276cqox+gVohRPRAm+CuXiBzObZmbPm9kGM3NmdkMY6yB6RCmeiBJ8FtZVefmSFkn6W0l7Q1oDESNK8USU4LtQnspzzr0o6UVJMrNHw1gD0SJK8USUEAecYwrZY0s/0bOr1kY9RqBca7PqtqxQa9NndHZWnr6oVUTJcw07Nqhm2Sva+NYviBK8F3mYzGympJmSVFFREfE0wfv1qrX687YaTS4aFPUogdgfpb1alVYiy0nT7V/4NlFKorqqpdqx4g21NjfItTSqtblBrc2N7f/duG9bS8MeNe3Zrpb6XXItjZKk/GMma/Sl/0aU4LXIw+ScmyVpliRVVla6I+weO7sam5SXka7nL54e9Sh9tu/pu+1tT9/dMfA65RSPJUpJllM8Rpvfe1w1S+b07AssTYMnXKSyM2Yqa+Ax4Q4HBCDyMKW66vpG1TQ0qtW5fe/wEEfdnVPKKR6rtMzciCfrfyyRrlEX36PmPdXavfb9w+6bXz5Zo754rzILipM0HdB3hClk1Q0Namp1+mhbjU4tjufTJ4e60CHtw60RT9a/OOdUv22Vapa9pu2LX1Tjzg2H3NfSMnXM9G+o+JSrZMZbYiJeQgmTmeVLGtP+aUJShZlNllTtnEutKwEOY+XO3apvaZUkzVm7MZZhOvzVd3+IdLb+4Ghi1CGn5DiNuuSHyik6NgkTAsEL64ipUtLcTp/f0/7xmKQbQlrTOy+v3dTpvzfrrlNPjHCao8cl4dHoaYwyC8uVnl2guqql7VtMQz/zVZWd+TUl0jOTN3A3mut3afEjV2r8tf+trEF9P6+1avZ3lF8+SUNP+2oA08F3Yb2O6Q+S4ntCJSBz1u0P08fVO7Shtk7l+fE4J0OUkutoYjRkwkUaNO5cZRcdqzW//6HqqpYqo2CoRl10jwpGVIY6565P52nFM7cddp+RF9+jvVtWqnD0GYFESZLKzpipZU/OVNGky5SWlR/IfcJfnGMKyY6GRr2zedsB2+as26S/Od7/p1eIUnL0Nkadf05XQ806DRo/QxXn36n07AGhz5x/zGRNuvX3+z5f8vj1Gjx+xgFHMomMbK179T6NueL+wNbNKR6jrMJybV/8okpOuSqw+4WfCFNIXlu/WS3uwKvf56z1P0xEKVxBxKiz0tNvUsHIzybth0omMrKVyMiWJLU01Kpp9xbllZ+kjPz9Pz+sZtmrkiWUV35Sl69v3L1FG958UDtXvSW5FhWMOE0VM76rjLwhR1y7cMw0VS+ZQ5j6AcIUkjmdzi91+OOmLdrT1Ky8I/xo9agQpXAEHaPOBoyaEvS4PVa3eakkp7xhxx+wvXb9AuUOG99l/oYdG7T0iRtVNPGLGnftI3LNjVr32n9o7cv36tjL7zvienmlE7T5nf+j1qb6fXFEavLzO2TMNbe26tX1m7tsb2hp1Rsbt+iiEWURTHV4RClYYcbIF3uqligtp1CZA4YdsL1h5yZl5HX9CcxrX75XRZMuVfm0r+/bVjr1Jq2a/R017tqsT1/4vprramSJdJWecbMGHXfOAV+fkV8s19qsptptgZ27gp8IUwjerdqunY1N3d42Z+1G78JElILRH2LUWV3VUuUOHd9lu2tuUOKgtzxq3LVZu1bP0+71H2nLB0/t39e1KpGeLUuka/g5tyt36Dg17anWkv97nQpHTT3gyCiRniVJam2uD+kRwReEKQRz1m485G0vr9vk1btAEKW+6W8x6qyuaqkGjT27y/b0nIFqqd990L7LlMjM0/HXP9Fl/0RahjLyi/adp8rIG6z07AI1792hzIz9R2Mt9bva7j83Nd53EodGmELw5sat+vqJY3VqyRD9zevzJElXjxmhs8pK9B8LlnjzLhBEqXf6c4w6tDTWqaFmXbdHTDlDx2n7ot8esM3S0tXaVK+MvCFHfBurPZv+ItfSrIyCoQds37ttpTLyi3t0oQTijTAFrLm1Vb/6/JkqycnW25v2v2VPesJ09dgRuuLY4apuaIxwwjZE6egQowPVVS2TXGu3YSocdbo2vPGfat67Q+k5AyVJeWUTlZ5doNUvfF+lU/+X0jLz1bBzvXaseEPDz7tj39smNe/dodUv/qNGXPi9Lv/vatcv0IBRp4f+2BA9whSw9ERCJTmHvmLoSLcnA1HqGWJ0aHVVS5WWla/MgeVdbsspHqO80gmqXvLyvku707MHaMyVP9WGN36q5U/dItfaqqyB5Rp0/Pn7otTa3KhVv7lDw6bcoPyDLjVvbW5QzfK5GnvVg+E/OESOMPUzROnwiFHPDK38soZWfvmQt5dOvVnrXrtPxZOvkCXSJEl5pSfouGse7nZ/55xWv3i3CioqNWTCxV1u37bwOeWVnaj8sonBPAB4jTD1I0Spe8QoeIWjp6qh5io17t6irMLSI+6/Z8OfVbP0FeWUjNWOlW9IkkZd/APlFLe9F7Ql0lVx7h2hzgx/EKZ+gigdiBiFr+TUa3q8b/4xk3Xqdw79s6WKJ38piJEQE4SpHyBKbYgREA+EKcX19ygRIyB+CFMK669RIkZAvBGmFNXfokSMgNRBmFJQf4kSMQJSE2FKMakeJWIEpD7ClEJSNUrECOhfCFOKSLUoESOg/yJMKSBVokSMAEiEKfbiHiViBOBghCnG4holYgTgcAhTTMUtSsQIQE8RphiKS5SIEYDeIEwx43uUiBGAviJMMeJrlIgRgCARppjwLUrOObU07VVz3Q4tmnUZMQIQGMIUA75E6eAjo8/UF+ukprVqbK0+YD9iBKAvCJPnoo7S4Z6mu0QbtC4xWBIxAhAcwuSxqKLU03NGPyq8UrsKRmj2jNOIEYDAECZPJTtKvbmAof699cqSlFM8JpSZAPRPhMlDyYpSX6+mM60PdB4AkAiTd8KOEpd2A/AdYfJIWFEiRgDihDB5IugoESMAcUWYPBBUlIgRgFRAmCLW1ygRIwCphjBFqLdRIkYAUhlhisjRRokYAegvCFMEehqlVIrRxj179cP5H+uVdZvV4pymlZXo36eerJKc7KhHA+AZwpRkR4pSKsWow5rde3TB86/rK8eN1AuXTFdjS6vumrdAt7/1oR4/b2rU4wHwDGFKokNFKXfYCdq7dWVKxaiz29/6UNeOG6nvVU7cv23y8br+tXckSde+8pbe2bxN08pK9Oi5p0c1JgBPEKYkyWqqPSBKicw8Vcy4UztX/UmfPH9XpDF6ZuVaravdo89XlOn4QQMCXWN9bZ3mbqjSvM3b9IvFK/dtb3FOOeltf/xumTBW140bpadWrAlsXQDxFVqYzOxWSXdIKpW0WNI3nXN/DGs9n6W5Fp3/l/u1t64tPpaWobTMXH36u7/vdv9kHxlNKyvRKb96Uf/8wWINz8/VBRWlumB4qc4oLVZWWlqf7vvj7TtUkJGu1y87r8ttmYmEJOlzZSX606YtfVoHQOoIJUxmdrWkByTdKulP7b++ZGYnOOfWhrGmr9Jci8Y0V2lw3f4jItfSpKbarQfsF+XTdENzs3Xj+GP188UrtK62To/8ZZUe+csq5WWk6+zyobpgeKlmDB+m4l5cqJCRMNU1t6gkJ1v5GRygAziysL5TfFvSo865X7R//r/N7POSvibpzpDW9NLEprWa1ris29s2JAZqbtYE/TFrvNakFUnLTVq+QNKCZI4oSXKu67Y9Tc363eoN+t3qDTJJpxYP1gUVpfue8uuJypIhGpiVoa+98Z7umHy8CjIztHr3Hr24ZqP+9fTJSsTkPBmA5Ak8TGaWKelUSfcddNPLkrpcgmVmMyXNlKSKioqgx4nUiAF5+qu0NTqtYcG+bRsSA/V61gT9MXO8VqcVSZ2/MXcTB184SfO3Vmv+1mrd++FiXTVmhEYXFig3/fBP9Q3MytTT55+pu9//WJe+9KZanNPIgjxdPno4UQLQrTCOmIokpUmqOmh7laQuJxqcc7MkzZKkyspKj781H73yvFzdePVdeui5h+Vqt2rugM9qY0bJvhiNiHi+zvY0NWtbfcMhbx+QmaFzy4fqgooynTd8mAZlZfb4vk8uHqznLjoriDEB9ANhPul/cGSsm20pL6uwTN/+6x9Ikm6PeJbD+cYf5+t/lq8+YNvoAfm6YHipLqgo1ZRhRcpov1ghaJe/9KYWV+9QXVOLTnzyBf3ynCk6beiQUNYC4L8wwrRNUoukYQdtL1HXoyh4YPWuWj21Yo0SJk0ZWqQLKkp1/vBSjS0sSMpFGL+5cFroawCIj8DD5JxrNLMPJM2Q9Eynm2ZIejbo9dB3i6p36qFppx31U3QAEIawnsr7saTHzew9SW9JukVSmaSHQ1oPfXDJyPKoRwCAfUIJk3PuaTMbIukf1PYC20WSLnLO8dJ+AMBhhXbxg3PuZ5J+Ftb9AwBSUziXWQEA0EuECQDgFcIEAPAKYQIAeIUwAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPAKYQIAeIUwAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPAKYQIAeIUwAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPAKYQIAeIUwAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPAKYQIAeIUwAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPBK4GEys5lmNtfMdpiZM7ORQa8BAEhdYRwx5Up6WdLdIdw3ACDFpQd9h865n0iSmVUGfd8AgNTHOSYAgFcCP2I6WmY2U9LM9k8bzGxRlPOEpEjStqiHCEmqPjYeV/yk6mNL1cc14lA3mHPuiF9tZv8k6e+PsNvZzrk/dPqaSknvSxrlnFvdkynNbL5zLuWeAkzVxyWl7mPjccVPqj62VH1ch9PTI6afSHriCPus7dsoAAD0MEzOuW1KzUNJAIBnAj/HZGbDJA2TdFz7phPMbKCktc656iN8+ayg5/FEqj4uKXUfG48rflL1saXq4zqkHp1jOqo7NLtb0j92c9ONzrlHA10MAJByAg8TAAB9weuYAABeIUwAAK94GaZUeiNYM7vVzD41s3oz+8DMPhf1TH1lZtPM7Hkz29D++3ND1DP1lZndaWbvm9kuM9tqZr81sxOjnisIZvZ1M1vY/th2mdk7ZnZx1HMFzczuav/z+GDUs/SVmd3d/lg6f2yOeq5k8TJMSpE3gjWzqyU9IOlfJJ0s6W1JL5lZRaSD9V2+pEWS/lbS3ohnCcp0ST+TNFXSOZKaJb1qZoOjHCog6yX9naRTJFVKel3SbDObFOlUATKzKZJulrQw6lkCtExSaaePidGOkzxeX/zQm3eP8ImZvStpoXPu5k7bVkj6tXPuzugmC46Z1Uq6LdWuuDSzfEk7JV3mnPtt1PMEzcyqJd3pnPuvqGfpKzMrlPSh2sL0fUmLnHO3RTtV37Rf3Xylcy4ljtqPlq9HTLFnZpmSTlXbkV9nL6vtX+XwW4Ha/n7URD1IkMwszcyuUdtR79tRzxOQWWr7x97rUQ8SsNHtT5d/amZPmdnoqAdKlsjfxDWFFUlKk1R10PYqSeclfxwcpQckLZD0TsRzBMLMJqrtsWRLqpV0uXPu42in6jszu1nSGEnXRT1LwN6VdIOkpZJKJP2DpLfNbIJzbnuUgyVD0o6YzOyfujmZd/DH9GTNk0QHP1dq3WyDR8zsx5LOlHSFc64l6nkCskzSZElTJP1c0mNxv7jDzMap7fzttc65xqjnCZJz7iXn3K+ccwudc69KukRt36+vj3i0pEjmEdNP1L/eCHabpBa1vT1TZyXqehQFT5jZ/ZKuUdu75X8S9TxBaf/GvbL90/lmdpqkb0m6Kbqp+ux0tT0zscjMOralSZpmZrdIynPONUQ1XJCcc7VmtljS2KhnSYakham/vRGsc67RzD6QNEPSM51umiHp2WimwuGY2QNqi9J059zSqOcJWUJSVtRD9NFsSfMP2vZLSSvUdiSVMkdRZpYtabykuVHPkgxenmPq4xvB+uTHkh43s/ckvSXpFkllkh6OdKo+ar9ibUz7pwlJFWY2WVK1cy6WR71m9pDazlNcJqmm/c+gJNU652ojGywAZvYjSS9IWqe2izq+orbL42P9Wibn3A5JOzpvM7M9avtzGOsfOGpm90n6rdqeRSqR9D1JeZIei3KuZPEyTGr7Bt75jWBfaP/1RkmPJn2aXnLOPW1mQ9R24rJUba/9ucg5tybayfqsUgf+y+2e9o/H1HbCNo5ubf/1tYO236OYv55Obf/Ie6L9151qe63Phc65OZFOhcM5RtKTanuqcqukeZKmpMD3jh7x+nVMAID+h9cxAQC8QpgAAF4hTAAArxAmAIBXCBMAwCuECQDgFcIEAPAKYQIAeOX/A1diOaBVX2BPAAAAAElFTkSuQmCC" />
                                                                </div>

                                                                <h1>Determinant as an area</h1>

                                                                <p>
                                                                        Note: if the determinant is zero, then it is a singular matrix (no solution)
                                                                        where the transform creates a line or a point, which does not have an area.
                                                                </p>

                                                                <img src='/notes/det1.jpg' width='600px' />

                                                                <h1>Determinant of a product</h1>

                                                                <p>
                                                                        The determinant of the product of two matricies (A and B) is
                                                                        equal to the product of the det(A) and det(B). Visually, this
                                                                        increases the area in the parallelogram by the same factor.
                                                                </p>

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Principle Component Analysis" isChecked={false}>
                                                        <TileRowCell0>

                                                                Coming soon.

                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="PCA in python" isChecked={false}>
                                                        <TileRowCell0>

                                                                <h1>Principle Component Analysis</h1>

                                                                <p>
                                                                        PCA is a technique to reduce dimensions (columns) of a dataset while loosing as little data as possible.
                                                                </p>

                                                                <ul className='list-disc ml-[25px]'>
                                                                        <li>step 1: create a matrix of the dataset</li>
                                                                        <li>step 2: center the data - for each column, calculate the average and subtract it from the observation</li>
                                                                </ul>

                                                                <div className='flex-1 jade-code min-w-[800px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html)} />
                                                                </div>

                                                                <ul className='list-disc ml-[25px]'>
                                                                        <li>step 3: calculate the covariance matrix</li>
                                                                </ul>

                                                                <div className='flex-1 jade-code min-w-[800px] max-w-[1000px]'>
                                                                        <div dangerouslySetInnerHTML={createMarkup(html2)} />
                                                                </div>



                                                        </TileRowCell0>
                                                </Tab2>

                                                <Tab2 title="Labs & Assignments" isChecked={false}>
                                                        <TileRowCell0>

                                                                <div className='lab-links'>

                                                                        <a href="/C1_W4_Lab_1_Interpreting_eigenvalues_and_eigenvectors.html" target="_blank">Lab: Interpreting eigenvalues and eigenvectors</a>
                                                                        <br /><br />

                                                                        <a href="/C1W4_Assignment.html" target="_blank">Assignment: Webpage navigation model and PCA</a>
                                                                        <br /><br />
                                                                </div>

                                                        </TileRowCell0>
                                                </Tab2>

                                        </Tabs>


                                </div>
                        </MathJaxContext>
                </>
        );
}
