import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

function CreatePost() {
  const editor = React.useRef(null);

  React.useEffect(() => {
    editor.current = new EditorJS({
      holder: "editorjs",
      placeholder: "Írd le a történeted...",
      i18n: {
        /**
         * @type {I18nDictionary}
         */
        messages: {
          /**
           * Other below: translation of different UI components of the editor.js core
           */
          ui: {
            blockTunes: {
              toggler: {
                "Click to tune": "Beállítás",
                "or drag to move": "vagy húzd el",
              },
            },
            inlineToolbar: {
              converter: {
                "Convert to": "Átváltoztat",
              },
            },
            toolbar: {
              toolbox: {
                Add: "Hozzáadás",
              },
            },
          },

          /**
           * Section for translation Tool Names: both block and inline tools
           */
          toolNames: {
            Text: "Szöveg",
            Heading: "Cím",
            List: "Lista",
            Warning: "Figyelmeztetés",
            Checklist: "Számozott Lista",
            Quote: "Idézet",
            Code: "Kód",
            Delimiter: "Delimiter",
            "Raw HTML": "HTML",
            Table: "Táblázat",
            Link: "Link",
            Bold: "Félkövér",
            Italic: "Dőlt",
          },

          /**
           * Section for passing translations to the external tools classes
           */
          tools: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
             * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
             */
            warning: {
              // <-- 'Warning' tool will accept this dictionary section
              Title: "Cím",
              Message: "Szöveg",
            },

            /**
             * Link is the internal Inline Tool
             */
            link: {
              "Add a link": "Link hozzáadása",
            },
          },

          /**
           * Section allows to translate Block Tunes
           */
          blockTunes: {
            /**
             * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
             * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
             *
             * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
             */
            delete: {
              Delete: "Törlés",
            },
            moveUp: {
              "Move up": "Felhúzás",
            },
            moveDown: {
              "Move down": "Lehúzás",
            },
            filter:{
              Filter: "Szűrés"
            }
          },
        },
      },

      /**
       * Section for translation Tool Names: both block and inline tools
       */
      toolNames: {
        Text: "Szöveg",
        Heading: "Cím",
        List: "Lista",
        Warning: "Figyelmeztetés",
        Checklist: "Számozott Lista",
        Quote: "Idézet",
        Code: "Kód",
        Delimiter: "Delimiter",
        "Raw HTML": "HTML",
        Table: "Táblázat",
        Link: "Link",
        Marker: "Jelölés",
        Bold: "Félkövér",
        Italic: "Dőlt",
        InlineCode: "Kód sorban",
      },
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
      },
    });
  }, []);

  const SaveIt = () => {
    editor.current.save().then((output) => {
      console.log(output);
    });
  };

  return (
    <div className="text-[40px] w-[65%]">
      <div id="editorjs"></div>
      <button
        onClick={() => {
          SaveIt();
        }}
      >
        Kurva
      </button>
    </div>
  );
}

export default CreatePost;
