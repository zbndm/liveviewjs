"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[5539],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(876));const i={sidebar_position:3},r="Forms & Changesets Example",s={unversionedId:"forms-and-changesets/use-with-forms",id:"forms-and-changesets/use-with-forms",title:"Forms & Changesets Example",description:"Now that we've revisited Form Events and learned about Changesets, let's take a look at how we can use them together to",source:"@site/docs/07-forms-and-changesets/use-with-forms.md",sourceDirName:"07-forms-and-changesets",slug:"/forms-and-changesets/use-with-forms",permalink:"/docs/forms-and-changesets/use-with-forms",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Changesets",permalink:"/docs/forms-and-changesets/changesets"},next:{title:"Uploading Files",permalink:"/docs/category/uploading-files"}},l={},p=[{value:"Example LiveView",id:"example-liveview",level:2},{value:"Code Walk Through",id:"code-walk-through",level:2},{value:"First defining the Zod Schema, Types, and Changeset Factory",id:"first-defining-the-zod-schema-types-and-changeset-factory",level:3},{value:"Define the LiveView TContext and TEvent types",id:"define-the-liveview-tcontext-and-tevent-types",level:3},{value:"Use Helpers in <code>render</code>",id:"use-helpers-in-render",level:3},{value:"Handle <code>save</code> event",id:"handle-save-event",level:3},{value:"Bonus <code>toggle_checkout</code> event",id:"bonus-toggle_checkout-event",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forms--changesets-example"},"Forms & Changesets Example"),(0,o.kt)("p",null,"Now that we've revisited Form Events and learned about Changesets, let's take a look at how we can use them together to\nbuild, validate, and process a form."),(0,o.kt)("h2",{id:"example-liveview"},"Example LiveView"),(0,o.kt)("p",null,'We\'re going to build a LiveView for managing our book library. We\'ll be able to add new books and mark those books as\n"available" or "checked out".'),(0,o.kt)("p",null,"Here's the LiveView example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  createLiveView,\n  error_tag,\n  form_for,\n  html,\n  LiveViewChangeset,\n  newChangesetFactory,\n  submit,\n  text_input,\n} from "liveviewjs";\nimport { nanoid } from "nanoid";\nimport { z } from "zod";\n\n// Create the zod BookSchema\nconst BookSchema = z.object({\n  id: z.string().default(nanoid),\n  name: z.string().min(2).max(100),\n  author: z.string().min(2).max(100),\n  checked_out: z.boolean().default(false),\n});\n\n// Infer the Book type from the BookSchema\ntype Book = z.infer<typeof BookSchema>;\n\n// in memory data store for Books\nconst booksDB: Record<string, Book> = {};\n\n// Book LiveViewChangesetFactory\nconst bookCSF = newChangesetFactory<Book>(BookSchema);\n\nexport const booksLiveView = createLiveView<\n  // Define the Context of the LiveView\n  {\n    books: Book[];\n    changeset: LiveViewChangeset<Book>;\n  },\n  // Define events that are initiated by the end-user\n  | { type: "save"; name: string; author: string }\n  | { type: "validate"; name: string; author: string }\n  | { type: "toggle-checkout"; id: string }\n>({\n  mount: async (socket) => {\n    socket.assign({\n      books: Object.values(booksDB),\n      changeset: bookCSF({}, {}), // empty changeset\n    });\n  },\n\n  handleEvent: (event, socket) => {\n    switch (event.type) {\n      case "validate":\n        // validate the form data\n        socket.assign({\n          changeset: bookCSF({}, event, "validate"),\n        });\n        break;\n      case "save":\n        // attempt to create the volunteer from the form data\n        const saveChangeset = bookCSF({}, event, "save");\n        let changeset = saveChangeset;\n        if (saveChangeset.valid) {\n          // save the book to the in memory data store\n          const newBook = saveChangeset.data as Book;\n          booksDB[newBook.id] = newBook;\n          // since book was saved, reset the changeset to empty\n          changeset = bookCSF({}, {});\n        }\n        // update context\n        socket.assign({\n          books: Object.values(booksDB),\n          changeset,\n        });\n        break;\n      case "toggle-checkout":\n        // lookup book by id\n        const book = booksDB[event.id];\n        if (book) {\n          // update book\n          book.checked_out = !book.checked_out;\n          booksDB[book.id] = book;\n          // update context\n          socket.assign({\n            books: Object.values(booksDB),\n          });\n        }\n        break;\n    }\n  },\n\n  render: (context, meta) => {\n    const { changeset, books } = context;\n    const { csrfToken } = meta;\n    return html`\n      <h1>My Library</h1>\n\n      <div id="bookForm">\n        ${form_for<Book>("#", csrfToken, {\n          phx_submit: "save",\n          phx_change: "validate",\n        })}\n\n          <div class="field">\n            ${text_input<Book>(changeset, "name", { placeholder: "Name", autocomplete: "off", phx_debounce: 1000 })}\n            ${error_tag(changeset, "name")}\n          </div>\n\n          <div class="field">\n            ${text_input<Book>(changeset, "author", { placeholder: "Author", autocomplete: "off", phx_debounce: 1000 })}\n            ${error_tag(changeset, "author")}\n          </div>\n\n          ${submit("Add Book", { phx_disable_with: "Saving..." })}\n        </form>\n      </div>\n\n      <div id="books">\n        ${books.map(renderBook)}\n      </div>\n    `;\n  },\n});\n\nfunction renderBook(b: Book) {\n  const color = b.checked_out ? `color: #ccc;` : ``;\n  const emoji = b.checked_out ? `\ud83d\udcd6[checked out]` : `\ud83d\udcda[available]`;\n  return html`\n    <div id="${b.id}" style="margin-top: 1rem; ${color}">\n      ${emoji}<span>${b.name}</span> by <span>${b.author}</span>\n      <div>\n        <button phx-click="toggle-checkout" phx-value-id="${b.id}" phx-disable-with="Updating...">\n          ${b.checked_out ? "Return" : "Check Out"}\n        </button>\n      </div>\n    </div>\n  `;\n}\n')),(0,o.kt)("h2",{id:"code-walk-through"},"Code Walk Through"),(0,o.kt)("p",null,"Let's walk through the code to see how it all works together."),(0,o.kt)("h3",{id:"first-defining-the-zod-schema-types-and-changeset-factory"},"First defining the Zod Schema, Types, and Changeset Factory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Create the zod BookSchema\nconst BookSchema = z.object({\n  id: z.string().default(nanoid),\n  name: z.string().min(2).max(100),\n  author: z.string().min(2).max(100),\n  checked_out: z.boolean().default(false),\n});\n\n// Infer the Book type from the BookSchema\ntype Book = z.infer<typeof BookSchema>;\n\n// Book LiveViewChangesetFactory\nconst bookCSF = newChangesetFactory<Book>(BookSchema);\n")),(0,o.kt)("p",null,"This code should look familiar. We're defining the Zod Schema, inferring the type, and creating the changeset factory\nfor the ",(0,o.kt)("inlineCode",{parentName:"p"},"BookSchema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," type."),(0,o.kt)("h3",{id:"define-the-liveview-tcontext-and-tevent-types"},"Define the LiveView TContext and TEvent types"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'...\nexport const booksLiveView = createLiveView<\n  // Define the Context of the LiveView\n  {\n    books: Book[];\n    changeset: LiveViewChangeset<Book>;\n  },\n  // Define events that are initiated by the end-user\n  | { type: "save"; name: string; author: string }\n  | { type: "validate"; name: string; author: string }\n  | { type: "toggle-checkout"; id: string }\n>({\n...\n')),(0,o.kt)("p",null,"Here we are saying the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," of our LiveView will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," array of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," of type\n",(0,o.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset<Book>"),". We are also defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," that can be initiated by the end-user. In this case, we\nhave ",(0,o.kt)("inlineCode",{parentName:"p"},"save"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"validate"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"toggle-checkout")," events along with the data that is required for each event."),(0,o.kt)("h3",{id:"use-helpers-in-render"},"Use Helpers in ",(0,o.kt)("inlineCode",{parentName:"h3"},"render")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'...\nrender: (context, meta) => {\n  // get the changeset and books from the context\n  const { changeset, books } = context;\n  // pull out the csrf token from the meta data\n  const { csrfToken } = meta;\n  return html`\n    <h1>My Library</h1>\n\n    <div id="bookForm">\n      \x3c!-- use the form_for helper to render the form --\x3e\n      ${form_for<Book>("#", csrfToken, {\n        phx_submit: "save",\n        phx_change: "validate",\n      })}\n\n        <div class="field">\n          \x3c!-- use the text_input helper to render the input for the name property --\x3e\n          ${text_input<Book>(changeset, "name", { placeholder: "Name", autocomplete: "off", phx_debounce: 1000 })}\n          \x3c!-- use the error_tag helper to optionally render the error message for the name property --\x3e\n          ${error_tag(changeset, "name")}\n        </div>\n\n        <div class="field">\n          \x3c!-- use the text_input helper to render the input for the author property --\x3e\n          ${text_input<Book>(changeset, "author", { placeholder: "Author", autocomplete: "off", phx_debounce: 1000 })}\n          \x3c!-- use the error_tag helper to optionally render the error message for the author property --\x3e\n          ${error_tag(changeset, "author")}\n        </div>\n        \x3c!-- use the submit helper to render the submit button --\x3e\n        ${submit("Add Book", { phx_disable_with: "Saving..." })}\n      </form>\n\n    </div>\n\n    <div id="books">\n      ${books.map(renderBook)}\n    </div>\n  `;\n},\n...\n')),(0,o.kt)("p",null,"There is a bit going on here so let's break it down. First we are pulling out the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"context"),". We are also pulling out the ",(0,o.kt)("inlineCode",{parentName:"p"},"csrfToken")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," data. Next we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"form_for")," helper to\nrender the form. We are passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"csrfToken")," as well as setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"phx_submit")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"phx_change")," attributes to the events that will be called in ",(0,o.kt)("inlineCode",{parentName:"p"},"handleEvent"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Using the ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"form_for")," helper is optional. You can use the ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"form")," helper and set the ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"phx_submit")," and ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"phx_change")),(0,o.kt)("p",{parentName:"admonition"},"attributes to the events that will be called in ",(0,o.kt)("inlineCode",{parentName:"p"},"handleEvent"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"form_for")," helper just makes it a little easier to\nrender the form and automatically passes the ",(0,o.kt)("inlineCode",{parentName:"p"},"csrfToken")," to the form."),(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"LiveViewJS")," framework automatically validates the csrfToken (a.k.a. authenticity token) for you and will throw an\nerror if the token is invalid. :::"),(0,o.kt)("p",{parentName:"admonition"},"Next we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"text_input")," helper to render the input for the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property. We are passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset"),"\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"autocomplete"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"phx_debounce")," attributes.")),(0,o.kt)("p",null,"note, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"phx-debounce")," attribute to only send the change event to the server after the user has stopped typing\nfor 1000ms. This is a great way to reduce the number of events sent to the server and improve performance. :::"),(0,o.kt)("p",null,"Next we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"error_tag")," helper to optionally render the error message for the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property. We are passing\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property there as well."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"error_tag")," helper is optional but it provides type safefy and automatically works with the ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"changeset")," to"),(0,o.kt)("p",{parentName:"admonition"},"pull out the error message for the property if there is one. :::"),(0,o.kt)("p",{parentName:"admonition"},"We follow the same pattern for the ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," property."),(0,o.kt)("p",{parentName:"admonition"},"Next, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"submit")," helper to render the submit button. We are passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Book")," text and the\n",(0,o.kt)("inlineCode",{parentName:"p"},"phx_disable_with")," attribute."),(0,o.kt)("p",{parentName:"admonition"},"Finally we map over the ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," to render each book using the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderBook")," function."),(0,o.kt)("h3",{parentName:"admonition",id:"handle-validate-event"},"Handle ",(0,o.kt)("inlineCode",{parentName:"h3"},"validate")," event"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'handleEvent: (event, socket) => {\n...\ncase "validate":\n  // validate the form data\n  socket.assign({\n    changeset: bookCSF({}, event, "validate"),\n  });\n  break;\n...\n')),(0,o.kt)("p",{parentName:"admonition"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"handleEvent")," occurs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," event, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookCSF")," changeset factory to generate a new\n",(0,o.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset")," for the the form data (also present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"event"),"). Since, this isn't updating the book, we pass an\nempty object ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," first, along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," data. Importantly, we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," and assign the\nresult to the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset")," will always be valid. :::"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset")," works with the helpers in ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," to automatically render the error messages for the properties\nthat have errors and set the value of the input fields to the values that were submitted."),(0,o.kt)("h3",{id:"handle-save-event"},"Handle ",(0,o.kt)("inlineCode",{parentName:"h3"},"save")," event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'handleEvent: (event, socket) => {\n...\ncase "save":\n  // attempt to create the volunteer from the form data\n  const saveChangeset = bookCSF({}, event, "save");\n  let changeset = saveChangeset;\n  if (saveChangeset.valid) {\n    // save the book to the in memory data store\n    const newBook = saveChangeset.data as Book;\n    booksDB[newBook.id] = newBook;\n    // since book was saved, reset the changeset to empty\n    changeset = bookCSF({}, {});\n  }\n  // update context\n  socket.assign({\n    books: Object.values(booksDB),\n    changeset,\n  });\n  break;\n...\n')),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"handleEvent")," occurs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," event, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bookCSF")," changeset factory to generate a new\n",(0,o.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset")," for the the form data (also present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"event"),"). Since, this is also not updating an existing\nbook, we pass an empty object ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," first, along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," data. Importantly, we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," and\nassign the result to the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveChangeset")," variable."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveChangeset")," is valid, we save the book to the in memory data store. We then reset the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," to be an\nempty changeset (i.e.,  ",(0,o.kt)("inlineCode",{parentName:"p"},"bookCSF({}, {})"),"). If the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveChangeset")," is not valid, we keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"saveChangeset")," so that the error messages will be rendered in the form using the form helpers (i.e.,  ",(0,o.kt)("inlineCode",{parentName:"p"},"error_tag")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"text_input"),")."),(0,o.kt)("p",null,"Finally, we update the ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,o.kt)("h2",{id:"bonus-toggle_checkout-event"},"Bonus ",(0,o.kt)("inlineCode",{parentName:"h2"},"toggle_checkout")," event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'handleEvent: (event, socket) => {\n...\ncase "toggle_checkout":\n  // lookup book by id\n  const book = booksDB[event.id];\n  if (book) {\n    // update book\n    book.checked_out = !book.checked_out;\n    booksDB[book.id] = book;\n    // update context\n    socket.assign({\n      books: Object.values(booksDB),\n    });\n  }\n  break;\n...\n')),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"handleEvent")," occurs with the ",(0,o.kt)("inlineCode",{parentName:"p"},"toggle_checkout")," event, we toggle the ",(0,o.kt)("inlineCode",{parentName:"p"},"checked_out")," property of the book in the in\nmemory data store and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"As you can see, Forms and Changesets are a powerful way to build forms in LiveView. They provide type safety and\nautomatically render the error messages and input values. They validate the form data incrementally and upon submission.\nIn short, they make forms easy and fun again!"))}h.isMDXComponent=!0}}]);