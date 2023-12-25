import { SVGProps } from "react"

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg id="_图层_2" data-name="图层 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" {...props}>
      <defs>
        <style>
          {`
            .cls-1 {
              clip-path: url(#clippath);
            }

            .cls-2, .cls-3 {
              fill: #fff;
            }

            .cls-4 {
              opacity: .4;
            }

            .cls-5, .cls-3 {
              stroke-width: 0px;
            }

            .cls-6 {
              stroke: #000;
              stroke-miterlimit: 10;
              stroke-width: .85px;
            }
          `}
        </style>
        <clipPath id="clippath">
          <polygon className="cls-3" points="283.67 213.18 283.67 324.84 357.21 324.84 357.21 289.41 425.07 289.41 338.11 586.82 425.07 586.82 516.33 281.9 516.33 213.18 283.67 213.18"/>
        </clipPath>
      </defs>
      <g id="_图层_1-2" data-name="图层 1">
        <g>
          <rect className="cls-5" width="800" height="800"/>
          <g>
            <polygon className="cls-2" points="283.67 213.18 283.67 324.84 357.21 324.84 357.21 289.41 425.07 289.41 338.11 586.82 425.07 586.82 516.33 281.9 516.33 213.18 283.67 213.18"/>
            <g className="cls-1">
              <g>
                <g className="cls-4">
                  <path className="cls-5" d="m392.47,470.32c2.02.27,3.74,1.56,5.15,3.85,1.41,2.3,2.61,5.28,3.59,8.95.98,3.67,1.79,7.84,2.43,12.51l.64,4.67c.51,5.4,3.73,12.76,7.15,16.37l3.3,3.42c3.3,3.43,6.5,7.05,9.58,10.89,3.08,3.84,5.92,7.89,8.53,12.17,2.6,4.28,2.63,4.35,2.63,4.35,2.1,5.08,4.4,11.13,5.11,13.44l.7,2.46c.7,2.47,1.29,5.07,1.78,7.81.48,2.74.8,5.57.94,8.49.14,2.92-.03,5.79-.5,8.6l-1.03,5.86c-1.97,4.76.03,8.98,4.43,9.38l4-1.21,3.99-1.21c4.21-3.13,7.69-5.6,7.74-5.5s-3.45,3.3-7.82,6.63c0,0-.42.32-4.81,1.96l-4.39,1.64c-4.71.09-11.04,3-14.06,6.47l-3.21,1.3c-3.21,1.3-6.5,1.63-9.87,1-4.14-.76-7.74-2.6-10.81-5.52-3.07-2.92-5.55-6.44-7.43-10.57-1.88-4.12-3.12-8.6-3.7-13.43-.58-4.83-.46-9.53.38-14.11.58-3.59,1.63-6.73,3.17-9.43l1.54-2.7c2.01-2.05,3.63-6.67,3.6-10.26l.04-4.26q.04-4.26.04-4.26c-.12-5.5-2.94-12.97-6.27-16.6l-2.77-3.44c-2.77-3.44-5.17-7.02-7.19-10.74-2.02-3.72-3.57-7.58-4.65-11.56-1.08-3.98-1.48-8.15-1.21-12.5.13-2.76.51-5.11,1.13-7.05.62-1.93,1.37-3.52,2.24-4.76.87-1.24,1.84-2.1,2.9-2.58,1.06-.48,2.06-.67,3-.56Zm9.39,36.26c1.15,1.21,1.48-2.25.74-7.7,0,0-1.12-8.21-3.37-13.9l-2.25-5.68c-2.5-2.92-5.57-5.85-6.83-6.51l-1.1.37-1.1.37c-.75.82-1.93,2.92-2.61,4.66l.23,1.95c.23,1.96.84,4.02,1.84,6.2,1.01,2.18,2.26,4.39,3.77,6.64,1.51,2.25,3.06,4.37,4.65,6.38,1.59,2.01,3.12,3.85,4.58,5.53l1.46,1.68Zm28.87,104.35c2.62-2.74.5-6.44-4.7-8.22,0,0-2.78-.95-7.45-6.57-4.19-4.87-7.31-10.33-9.34-16.39-2.04-6.05-2.49-9.43-2.49-9.43-.73-5.45-1.33-10.37-1.34-10.94v-.69l-.02-.69c-.05-1.03-1.51-.31-3.24,1.61l-1.32,2.42c-1.32,2.42-2.26,5.3-2.83,8.61-.78,4.42-.9,8.98-.36,13.7.54,4.72,1.7,9.12,3.47,13.2,1.78,4.08,4.19,7.56,7.23,10.42,3.05,2.87,6.67,4.6,10.86,5.2,2.94.46,5.83.1,8.67-1.07l2.84-1.17Zm11.26-21.45c.96-5.43.49-10.65-1.41-15.65-1.91-5-4.65-9.88-8.23-14.64-3.58-4.76-7.71-9.45-12.39-14.07-4.69-4.62-6.81-6.82-6.81-6.82-3.82-3.95-6.84-3.32-6.7,1.41l.14,3.97.15,3.97c.19,3.4,1.93,5.44,3.88,4.52l1.87-.25c3.04-.32,5.8.48,8.28,2.38,2.48,1.91,4.49,4.4,6.04,7.49,1.55,3.08,2.6,6.48,3.16,10.21.55,3.73.39,7.23-.49,10.51-.65,2.38-1.57,4.21-2.74,5.51-1.18,1.3-2.8,1.53-4.88.69-1.36-.55-2.32-1.53-2.9-2.94-.57-1.41-.6-2.88-.08-4.4.49-1.44,1.36-2.5,2.61-3.18l1.25-.68c1.49.2,3.11.57,3.61.82l.52.39c.52.39,1.07.45,1.65.19.58-.26.87-.76.88-1.49.09-2.87-.27-5.81-1.07-8.82-.8-3.01-1.95-5.7-3.46-8.08-1.5-2.38-3.29-4.3-5.35-5.77-2.06-1.47-4.29-2.14-6.7-2.02-.92.08-1.88.26-2.87.55l-.99.28c-.99.61-1.26,5.58-.6,11.04,0,0,.43,3.58,2.66,9.44,2.23,5.86,3.84,8.21,3.84,8.21,3.11,4.53,7.85,10.64,10.53,13.57l2.88,2.16,2.88,2.16c3.56,1.34,8.01-1.15,9.89-5.52l.96-5.16Z"/>
                  <path className="cls-5" d="m456.45,495.99c-.55-1.95-1.27-3.9-2.15-5.85-.88-1.94-1.8-3.82-2.77-5.62-.97-1.8-1.93-3.46-2.87-4.98l-.95-1.52c-.94-1.37-1.62-2.76-1.51-3.09s1.91,1.95,4,5.07l1.89,3.03c1.89,3.04,3.46,6.17,4.71,9.41,1.25,3.23,2.02,6.57,2.31,10,.29,3.44-.17,6.91-1.38,10.43-.99,2.88-2.36,4.92-4.11,6.12-1.76,1.2-3.75,1.74-5.99,1.61-2.23-.13-4.63-.91-7.19-2.35-2.56-1.44-5.11-3.45-7.65-6.02-3.49-3.59-6.19-7.25-8.08-10.97-1.9-3.72-3.23-7.31-4.01-10.76-.77-3.45-1.1-6.65-.98-9.61.12-2.95.45-5.36,1.01-7.23,1.03-3.49,2.36-5.76,3.97-6.79,1.62-1.03,3.38-1.25,5.29-.66,2.36.95,4.39,2.98,6.1,6.07,1.71,3.1,3.13,6.65,4.28,10.66,1.15,4.01,2.07,8.16,2.76,12.44l.69,4.28c.44,3.98,2.8,8.74,5.25,10.58l1.87.84,1.87.85c1.52-.56,3.29-1.59,3.93-2.28l.3-.88c.55-1.6.76-3.53.65-5.81-.12-2.27-.54-4.6-1.27-6.99Zm-18.53,4.54l1.98,2.07c2.09,1.94,2.62-.81,1.18-6.12,0,0-1.44-5.31-3.83-10.55-2.4-5.24-4.69-9.12-6.88-11.64-2.19-2.52-4.06-3.75-5.63-3.7-1.56.05-2.47,1.16-2.73,3.33-.36,2.49-.13,4.84.7,7.04.83,2.2,2.03,4.36,3.58,6.49,1.55,2.13,3.34,4.26,5.38,6.4,2.03,2.14,4.12,4.37,6.26,6.68Z"/>
                  <path className="cls-5" d="m444.72,404.62c.27.11.05,2.22-.47,4.7l.39,2.29c.39,2.3,1.31,4.33,2.74,6.08,1.48,1.87,3.13,3.94,4.95,6.23l1.82,2.28c2.09,2.84,5.11,7.1,6.71,9.46l1.9,2.9c1.89,2.9,3.7,5.95,5.41,9.14,1.71,3.19,3.13,6.38,4.24,9.55,1.11,3.18,1.55,5.94,1.31,8.3-.29,2.52-1.08,4.59-2.37,6.21-1.29,1.62-2.75,2.56-4.38,2.8-1.12.19-2.32-.05-3.6-.7-1.28-.65-2.57-1.52-3.88-2.59-1.3-1.07-2.59-2.23-3.88-3.47l-1.28-1.24c-1.32-1.26-2.76-2.64-3.2-3.07l-1.06-1.07c-1.06-1.06-2.32-2.3-3.79-3.71-1.47-1.41-3.04-2.88-4.71-4.42-1.67-1.54-3.2-2.95-4.59-4.24-1.39-1.29-2.53-2.29-3.42-3.02l-.89-.72c-.19.05.15,1.26.76,2.7l1.43,1.89,1.43,1.89c2.7,3.4,6.1,7.73,7.57,9.62l1.47,1.77,1.47,1.78c1.44,1.96,2.46,3.74,2.25,3.95s-3.1-3.16-6.42-7.5l-2.36-2.86c-2.13-2.58-4.12-5.09-5.97-7.52l-1.85-2.43c-.82-2.3-1.51-4.88-1.53-5.73l.29-1.34c.3-1.34.85-2.52,1.65-3.57.81-1.04,1.88-1.67,3.22-1.91l1.34-.23c1.99,1.27,4.09,2.67,4.65,3.12l.49.47c.49.47,1.14,1.12,1.96,1.95.81.83,1.9,1.93,3.27,3.3l1.36,1.37c2.18,2.16,4.94,4.92,6.14,6.14l1.62,1.7c1.62,1.7,3.3,3.38,5.05,5.04,1.75,1.66,3.4,3.1,4.93,4.31,1.54,1.21,2.7,1.75,3.48,1.61,1.19-.15,1.87-.84,2.04-2.04.29-1.79-.16-4.18-1.33-7.15-1.18-2.98-2.65-6.05-4.41-9.22-1.76-3.17-3.55-6.16-5.35-8.98l-1.8-2.82c-1.31-1.93-4.33-6.17-6.72-9.42l-2.08-2.61-2.08-2.61c-1.81-2.19-3.99-4.49-4.84-5.11l-1.01.23-1.01.23c-.6.99-1.3,1.7-1.57,1.6s.54-3.19,1.8-6.85,2.5-6.57,2.76-6.46Z"/>
                  <path className="cls-5" d="m488.16,403.44c-.55-1.95-1.27-3.9-2.15-5.85-.88-1.94-1.8-3.82-2.77-5.62-.97-1.8-1.93-3.46-2.87-4.98l-.95-1.52c-.94-1.37-1.62-2.76-1.51-3.09s1.91,1.95,4,5.07l1.89,3.04c1.89,3.04,3.46,6.17,4.71,9.4,1.25,3.23,2.02,6.57,2.31,10,.29,3.44-.17,6.91-1.37,10.43-.99,2.88-2.36,4.92-4.11,6.12-1.76,1.2-3.75,1.74-5.99,1.61-2.23-.13-4.63-.91-7.19-2.35s-5.11-3.45-7.65-6.02c-3.49-3.59-6.19-7.25-8.08-10.97-1.9-3.72-3.23-7.31-4.01-10.76-.77-3.45-1.1-6.65-.98-9.61.12-2.95.45-5.36,1.01-7.23,1.03-3.49,2.36-5.76,3.97-6.79,1.62-1.03,3.38-1.25,5.29-.66,2.36.95,4.39,2.98,6.1,6.07,1.71,3.1,3.13,6.65,4.28,10.66,1.15,4.01,2.07,8.16,2.76,12.44l.69,4.28c.44,3.98,2.8,8.74,5.25,10.58l1.87.84,1.87.84c1.52-.56,3.29-1.59,3.93-2.28l.3-.88c.55-1.6.76-3.53.65-5.81-.12-2.27-.54-4.6-1.27-6.99Zm-18.53,4.54l1.98,2.07c2.09,1.94,2.62-.81,1.18-6.12,0,0-1.44-5.31-3.83-10.55-2.4-5.24-4.69-9.12-6.88-11.64-2.19-2.52-4.06-3.75-5.63-3.7-1.56.05-2.47,1.16-2.73,3.33-.36,2.49-.13,4.84.7,7.04.83,2.2,2.03,4.36,3.58,6.49,1.55,2.13,3.34,4.26,5.38,6.4,2.03,2.14,4.12,4.37,6.26,6.68Z"/>
                  <path className="cls-5" d="m497.96,323.35c.18-.23,1.44,1.08,2.81,2.91l1.45,1.95c1.45,1.95,2.86,3.95,4.23,6,1.37,2.05,2.61,4.12,3.73,6.21l1.12,2.09c.7,2.16,1.34,4.35,1.42,4.87l.06.43c.06.43.09.88.09,1.33-.11,1.5-.58,2.77-1.42,3.79-.84,1.03-1.81,1.77-2.9,2.24-1.1.47-2.24.6-3.43.39l-1.19-.21c-1.11-.9-3.58-3.3-5.47-5.35l-2.09-2.21c-2.09-2.21-4.24-4.42-6.46-6.63-2.21-2.21-4.38-4.31-6.51-6.31l-2.13-1.99c-1.84-1.58-6.27-4.3-9.83-6.04l-.67,4.1-.48,3.54c1.4,4.74,2.98,9.56,3.51,10.72s2.59,4.75,2.73,4.92l.17.21c.17.21.56.61,1.17,1.22.61.61,1.47,1.48,2.59,2.61,1.12,1.13,2.68,2.74,4.7,4.83,2.01,2.09,4.54,4.68,7.59,7.77,3.05,3.1,4.18,4.25,4.18,4.25,3.85,3.93,6.1,9.67,5.01,12.76s-5.12,2.38-8.94-1.57c0,0-12.06-12.45-17.63-18.15-5.57-5.7-8.79-8.96-9.66-9.76l-1.44-1.03c-.24.23.08,1.59.69,3.03l1.43,1.89,1.43,1.9c2.7,3.4,6.14,7.75,7.66,9.66l1.43,1.76,1.43,1.76c1.55,2,2.62,3.83,2.37,4.07s-1.91-1.47-3.69-3.78l-1.43-1.76-1.43-1.76c-1.33-1.69-4.28-5.43-6.57-8.31l-1.82-2.42-1.82-2.41c-.87-2.32-1.62-4.87-1.66-5.67l.23-1.14.23-1.14c.61-1.14,2.34-3.2,3.83-4.57l1.86.39,1.86.39c1.77,1.14,2.92,1.53,2.55.87l-.24-.6-.24-.6c-.25-.61-1.74-5.28-3.31-10.36l.68-3.64c.29-1.79.89-3.48,1.8-5.07.91-1.59,2.08-2.8,3.51-3.64,1.43-.83,3.14-1.1,5.15-.79,2.01.31,4.27,1.43,6.79,3.35,1.86,1.48,3.78,3.16,5.78,5.06,2,1.9,3.97,3.85,5.93,5.87,1.96,2.02,3.83,3.98,5.62,5.88l1.79,1.9c1.7,1.69,3.36,3.2,3.67,3.37h.36c.36.02.53-.3.51-.94-.02-.64-.33-1.7-.93-3.17l-.6-1.47c-1.59-2.71-3.66-6.12-4.6-7.59l-.89-1.31c-.89-1.31-1.73-2.54-2.52-3.68-.79-1.14-1.49-2.12-2.1-2.96l-.61-.84c-.39-.55-.57-1.18-.39-1.41Z"/>
                </g>
                <g>
                  <path className="cls-6" d="m392.47,470.32c2.02.27,3.74,1.56,5.15,3.85,1.41,2.3,2.61,5.28,3.59,8.95.98,3.67,1.79,7.84,2.43,12.51l.64,4.67c.51,5.4,3.73,12.76,7.15,16.37l3.3,3.42c3.3,3.43,6.5,7.05,9.58,10.89,3.08,3.84,5.92,7.89,8.53,12.17,2.6,4.28,2.63,4.35,2.63,4.35,2.1,5.08,4.4,11.13,5.11,13.44l.7,2.46c.7,2.47,1.29,5.07,1.78,7.81.48,2.74.8,5.57.94,8.49.14,2.92-.03,5.79-.5,8.6l-1.03,5.86c-1.97,4.76.03,8.98,4.43,9.38l4-1.21,3.99-1.21c4.21-3.13,7.69-5.6,7.74-5.5s-3.45,3.3-7.82,6.63c0,0-.42.32-4.81,1.96l-4.39,1.64c-4.71.09-11.04,3-14.06,6.47l-3.21,1.3c-3.21,1.3-6.5,1.63-9.87,1-4.14-.76-7.74-2.6-10.81-5.52-3.07-2.92-5.55-6.44-7.43-10.57-1.88-4.12-3.12-8.6-3.7-13.43-.58-4.83-.46-9.53.38-14.11.58-3.59,1.63-6.73,3.17-9.43l1.54-2.7c2.01-2.05,3.63-6.67,3.6-10.26l.04-4.26q.04-4.26.04-4.26c-.12-5.5-2.94-12.97-6.27-16.6l-2.77-3.44c-2.77-3.44-5.17-7.02-7.19-10.74-2.02-3.72-3.57-7.58-4.65-11.56-1.08-3.98-1.48-8.15-1.21-12.5.13-2.76.51-5.11,1.13-7.05.62-1.93,1.37-3.52,2.24-4.76.87-1.24,1.84-2.1,2.9-2.58,1.06-.48,2.06-.67,3-.56Zm9.39,36.26c1.15,1.21,1.48-2.25.74-7.7,0,0-1.12-8.21-3.37-13.9l-2.25-5.68c-2.5-2.92-5.57-5.85-6.83-6.51l-1.1.37-1.1.37c-.75.82-1.93,2.92-2.61,4.66l.23,1.95c.23,1.96.84,4.02,1.84,6.2,1.01,2.18,2.26,4.39,3.77,6.64,1.51,2.25,3.06,4.37,4.65,6.38,1.59,2.01,3.12,3.85,4.58,5.53l1.46,1.68Zm28.87,104.35c2.62-2.74.5-6.44-4.7-8.22,0,0-2.78-.95-7.45-6.57-4.19-4.87-7.31-10.33-9.34-16.39-2.04-6.05-2.49-9.43-2.49-9.43-.73-5.45-1.33-10.37-1.34-10.94v-.69l-.02-.69c-.05-1.03-1.51-.31-3.24,1.61l-1.32,2.42c-1.32,2.42-2.26,5.3-2.83,8.61-.78,4.42-.9,8.98-.36,13.7.54,4.72,1.7,9.12,3.47,13.2,1.78,4.08,4.19,7.56,7.23,10.42,3.05,2.87,6.67,4.6,10.86,5.2,2.94.46,5.83.1,8.67-1.07l2.84-1.17Zm11.26-21.45c.96-5.43.49-10.65-1.41-15.65-1.91-5-4.65-9.88-8.23-14.64-3.58-4.76-7.71-9.45-12.39-14.07-4.69-4.62-6.81-6.82-6.81-6.82-3.82-3.95-6.84-3.32-6.7,1.41l.14,3.97.15,3.97c.19,3.4,1.93,5.44,3.88,4.52l1.87-.25c3.04-.32,5.8.48,8.28,2.38,2.48,1.91,4.49,4.4,6.04,7.49,1.55,3.08,2.6,6.48,3.16,10.21.55,3.73.39,7.23-.49,10.51-.65,2.38-1.57,4.21-2.74,5.51-1.18,1.3-2.8,1.53-4.88.69-1.36-.55-2.32-1.53-2.9-2.94-.57-1.41-.6-2.88-.08-4.4.49-1.44,1.36-2.5,2.61-3.18l1.25-.68c1.49.2,3.11.57,3.61.82l.52.39c.52.39,1.07.45,1.65.19.58-.26.87-.76.88-1.49.09-2.87-.27-5.81-1.07-8.82-.8-3.01-1.95-5.7-3.46-8.08-1.5-2.38-3.29-4.3-5.35-5.77-2.06-1.47-4.29-2.14-6.7-2.02-.92.08-1.88.26-2.87.55l-.99.28c-.99.61-1.26,5.58-.6,11.04,0,0,.43,3.58,2.66,9.44,2.23,5.86,3.84,8.21,3.84,8.21,3.11,4.53,7.85,10.64,10.53,13.57l2.88,2.16,2.88,2.16c3.56,1.34,8.01-1.15,9.89-5.52l.96-5.16Z"/>
                  <path className="cls-6" d="m456.45,495.99c-.55-1.95-1.27-3.9-2.15-5.85-.88-1.94-1.8-3.82-2.77-5.62-.97-1.8-1.93-3.46-2.87-4.98l-.95-1.52c-.94-1.37-1.62-2.76-1.51-3.09s1.91,1.95,4,5.07l1.89,3.03c1.89,3.04,3.46,6.17,4.71,9.41,1.25,3.23,2.02,6.57,2.31,10,.29,3.44-.17,6.91-1.38,10.43-.99,2.88-2.36,4.92-4.11,6.12-1.76,1.2-3.75,1.74-5.99,1.61-2.23-.13-4.63-.91-7.19-2.35-2.56-1.44-5.11-3.45-7.65-6.02-3.49-3.59-6.19-7.25-8.08-10.97-1.9-3.72-3.23-7.31-4.01-10.76-.77-3.45-1.1-6.65-.98-9.61.12-2.95.45-5.36,1.01-7.23,1.03-3.49,2.36-5.76,3.97-6.79,1.62-1.03,3.38-1.25,5.29-.66,2.36.95,4.39,2.98,6.1,6.07,1.71,3.1,3.13,6.65,4.28,10.66,1.15,4.01,2.07,8.16,2.76,12.44l.69,4.28c.44,3.98,2.8,8.74,5.25,10.58l1.87.84,1.87.85c1.52-.56,3.29-1.59,3.93-2.28l.3-.88c.55-1.6.76-3.53.65-5.81-.12-2.27-.54-4.6-1.27-6.99Zm-18.53,4.54l1.98,2.07c2.09,1.94,2.62-.81,1.18-6.12,0,0-1.44-5.31-3.83-10.55-2.4-5.24-4.69-9.12-6.88-11.64-2.19-2.52-4.06-3.75-5.63-3.7-1.56.05-2.47,1.16-2.73,3.33-.36,2.49-.13,4.84.7,7.04.83,2.2,2.03,4.36,3.58,6.49,1.55,2.13,3.34,4.26,5.38,6.4,2.03,2.14,4.12,4.37,6.26,6.68Z"/>
                  <path className="cls-6" d="m444.72,404.62c.27.11.05,2.22-.47,4.7l.39,2.29c.39,2.3,1.31,4.33,2.74,6.08,1.48,1.87,3.13,3.94,4.95,6.23l1.82,2.28c2.09,2.84,5.11,7.1,6.71,9.46l1.9,2.9c1.89,2.9,3.7,5.95,5.41,9.14,1.71,3.19,3.13,6.38,4.24,9.55,1.11,3.18,1.55,5.94,1.31,8.3-.29,2.52-1.08,4.59-2.37,6.21-1.29,1.62-2.75,2.56-4.38,2.8-1.12.19-2.32-.05-3.6-.7-1.28-.65-2.57-1.52-3.88-2.59-1.3-1.07-2.59-2.23-3.88-3.47l-1.28-1.24c-1.32-1.26-2.76-2.64-3.2-3.07l-1.06-1.07c-1.06-1.06-2.32-2.3-3.79-3.71-1.47-1.41-3.04-2.88-4.71-4.42-1.67-1.54-3.2-2.95-4.59-4.24-1.39-1.29-2.53-2.29-3.42-3.02l-.89-.72c-.19.05.15,1.26.76,2.7l1.43,1.89,1.43,1.89c2.7,3.4,6.1,7.73,7.57,9.62l1.47,1.77,1.47,1.78c1.44,1.96,2.46,3.74,2.25,3.95s-3.1-3.16-6.42-7.5l-2.36-2.86c-2.13-2.58-4.12-5.09-5.97-7.52l-1.85-2.43c-.82-2.3-1.51-4.88-1.53-5.73l.29-1.34c.3-1.34.85-2.52,1.65-3.57.81-1.04,1.88-1.67,3.22-1.91l1.34-.23c1.99,1.27,4.09,2.67,4.65,3.12l.49.47c.49.47,1.14,1.12,1.96,1.95.81.83,1.9,1.93,3.27,3.3l1.36,1.37c2.18,2.16,4.94,4.92,6.14,6.14l1.62,1.7c1.62,1.7,3.3,3.38,5.05,5.04,1.75,1.66,3.4,3.1,4.93,4.31,1.54,1.21,2.7,1.75,3.48,1.61,1.19-.15,1.87-.84,2.04-2.04.29-1.79-.16-4.18-1.33-7.15-1.18-2.98-2.65-6.05-4.41-9.22-1.76-3.17-3.55-6.16-5.35-8.98l-1.8-2.82c-1.31-1.93-4.33-6.17-6.72-9.42l-2.08-2.61-2.08-2.61c-1.81-2.19-3.99-4.49-4.84-5.11l-1.01.23-1.01.23c-.6.99-1.3,1.7-1.57,1.6s.54-3.19,1.8-6.85,2.5-6.57,2.76-6.46Z"/>
                  <path className="cls-6" d="m488.16,403.44c-.55-1.95-1.27-3.9-2.15-5.85-.88-1.94-1.8-3.82-2.77-5.62-.97-1.8-1.93-3.46-2.87-4.98l-.95-1.52c-.94-1.37-1.62-2.76-1.51-3.09s1.91,1.95,4,5.07l1.89,3.04c1.89,3.04,3.46,6.17,4.71,9.4,1.25,3.23,2.02,6.57,2.31,10,.29,3.44-.17,6.91-1.37,10.43-.99,2.88-2.36,4.92-4.11,6.12-1.76,1.2-3.75,1.74-5.99,1.61-2.23-.13-4.63-.91-7.19-2.35s-5.11-3.45-7.65-6.02c-3.49-3.59-6.19-7.25-8.08-10.97-1.9-3.72-3.23-7.31-4.01-10.76-.77-3.45-1.1-6.65-.98-9.61.12-2.95.45-5.36,1.01-7.23,1.03-3.49,2.36-5.76,3.97-6.79,1.62-1.03,3.38-1.25,5.29-.66,2.36.95,4.39,2.98,6.1,6.07,1.71,3.1,3.13,6.65,4.28,10.66,1.15,4.01,2.07,8.16,2.76,12.44l.69,4.28c.44,3.98,2.8,8.74,5.25,10.58l1.87.84,1.87.84c1.52-.56,3.29-1.59,3.93-2.28l.3-.88c.55-1.6.76-3.53.65-5.81-.12-2.27-.54-4.6-1.27-6.99Zm-18.53,4.54l1.98,2.07c2.09,1.94,2.62-.81,1.18-6.12,0,0-1.44-5.31-3.83-10.55-2.4-5.24-4.69-9.12-6.88-11.64-2.19-2.52-4.06-3.75-5.63-3.7-1.56.05-2.47,1.16-2.73,3.33-.36,2.49-.13,4.84.7,7.04.83,2.2,2.03,4.36,3.58,6.49,1.55,2.13,3.34,4.26,5.38,6.4,2.03,2.14,4.12,4.37,6.26,6.68Z"/>
                  <path className="cls-6" d="m497.96,323.35c.18-.23,1.44,1.08,2.81,2.91l1.45,1.95c1.45,1.95,2.86,3.95,4.23,6,1.37,2.05,2.61,4.12,3.73,6.21l1.12,2.09c.7,2.16,1.34,4.35,1.42,4.87l.06.43c.06.43.09.88.09,1.33-.11,1.5-.58,2.77-1.42,3.79-.84,1.03-1.81,1.77-2.9,2.24-1.1.47-2.24.6-3.43.39l-1.19-.21c-1.11-.9-3.58-3.3-5.47-5.35l-2.09-2.21c-2.09-2.21-4.24-4.42-6.46-6.63-2.21-2.21-4.38-4.31-6.51-6.31l-2.13-1.99c-1.84-1.58-6.27-4.3-9.83-6.04l-.67,4.1-.48,3.54c1.4,4.74,2.98,9.56,3.51,10.72s2.59,4.75,2.73,4.92l.17.21c.17.21.56.61,1.17,1.22.61.61,1.47,1.48,2.59,2.61,1.12,1.13,2.68,2.74,4.7,4.83,2.01,2.09,4.54,4.68,7.59,7.77,3.05,3.1,4.18,4.25,4.18,4.25,3.85,3.93,6.1,9.67,5.01,12.76s-5.12,2.38-8.94-1.57c0,0-12.06-12.45-17.63-18.15-5.57-5.7-8.79-8.96-9.66-9.76l-1.44-1.03c-.24.23.08,1.59.69,3.03l1.43,1.89,1.43,1.9c2.7,3.4,6.14,7.75,7.66,9.66l1.43,1.76,1.43,1.76c1.55,2,2.62,3.83,2.37,4.07s-1.91-1.47-3.69-3.78l-1.43-1.76-1.43-1.76c-1.33-1.69-4.28-5.43-6.57-8.31l-1.82-2.42-1.82-2.41c-.87-2.32-1.62-4.87-1.66-5.67l.23-1.14.23-1.14c.61-1.14,2.34-3.2,3.83-4.57l1.86.39,1.86.39c1.77,1.14,2.92,1.53,2.55.87l-.24-.6-.24-.6c-.25-.61-1.74-5.28-3.31-10.36l.68-3.64c.29-1.79.89-3.48,1.8-5.07.91-1.59,2.08-2.8,3.51-3.64,1.43-.83,3.14-1.1,5.15-.79,2.01.31,4.27,1.43,6.79,3.35,1.86,1.48,3.78,3.16,5.78,5.06,2,1.9,3.97,3.85,5.93,5.87,1.96,2.02,3.83,3.98,5.62,5.88l1.79,1.9c1.7,1.69,3.36,3.2,3.67,3.37h.36c.36.02.53-.3.51-.94-.02-.64-.33-1.7-.93-3.17l-.6-1.47c-1.59-2.71-3.66-6.12-4.6-7.59l-.89-1.31c-.89-1.31-1.73-2.54-2.52-3.68-.79-1.14-1.49-2.12-2.1-2.96l-.61-.84c-.39-.55-.57-1.18-.39-1.41Z"/>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
