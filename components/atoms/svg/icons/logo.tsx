import * as React from "react"

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 512 512" {...props}>
      <path d="M447.716 97.794L297.207 10.993c-25.416-14.658-56.997-14.657-82.414 0L64.285 97.794C38.819 112.479 23 139.866 23 169.266v173.467c0 29.4 15.819 56.787 41.284 71.472l150.509 86.801c25.421 14.661 57.001 14.656 82.414 0l150.508-86.801C473.181 399.52 489 372.133 489 342.733V169.266c0-29.399-15.819-56.786-41.284-71.472zM449 342.733c0 15.144-8.148 29.251-21.266 36.815l-150.509 86.801c-13.093 7.552-29.358 7.552-42.451 0L84.265 379.548C71.148 371.983 63 357.877 63 342.733V169.266c0-15.143 8.148-29.25 21.266-36.814l150.508-86.801c13.094-7.552 29.364-7.549 42.452 0l150.509 86.8C440.852 140.016 449 154.122 449 169.266v173.467z" />
      <path d="M236.994 240.729l-74.281-62.863c-8.431-7.136-21.052-6.085-28.187 2.349-7.135 8.434-6.083 21.055 2.349 28.191L193.113 256l-56.238 47.593c-8.432 7.136-9.483 19.757-2.349 28.191 7.152 8.452 19.776 9.467 28.187 2.348l74.281-62.863c9.45-7.997 9.423-22.565 0-30.54zM362.206 298.859h-89.995c-11.046 0-20 8.955-20 20.003s8.954 20.003 20 20.003h89.995c11.045 0 20-8.955 20-20.003s-8.954-20.003-20-20.003z" />
    </svg>
  )
}

export default Logo
