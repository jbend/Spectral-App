import { Spectral, Document } from '@stoplight/spectral-core';
//import Parsers, Yaml from '@stoplight/spectral-parsers';
import { Yaml } from '@stoplight/spectral-parsers';
import { truthy } from '@stoplight/spectral-functions';

import Button from '@trimbleinc/modus-react-bootstrap/Button';

export default function Linter() {

  const myDocument = new Document(
    `---
  responses:
    '200':
      description: ''`,
    Yaml,
    "/my-file",
  );


  const spectral = new Spectral();
  spectral.setRuleset({
    // a ruleset has to be provided
    rules: {
      "no-empty-description": {
        given: "$..description",
        message: "Description must not be empty",
        then: {
          function: truthy,
        },
      },
    },
  });  

  const parse = () => {
    spectral.run(myDocument).then(console.log);    
  }

  return (
    <>
      <h1>Linter</h1>
      <Button onClick={parse}>Parse</Button>
    </>
  )

}