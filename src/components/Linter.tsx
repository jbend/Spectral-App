import { useState } from 'react';
import { Spectral, Document, Ruleset } from '@stoplight/spectral-core';
//import Parsers, Yaml from '@stoplight/spectral-parsers';
import { Json, Yaml } from '@stoplight/spectral-parsers';
import { truthy } from '@stoplight/spectral-functions';

import Loader from './Loader';

import Button from '@trimbleinc/modus-react-bootstrap/Button';

export default function Linter() {

  const [loading, setLoading] = useState(false);

  const myDocument = new Document(
    `---
  responses:
    '200':
      description: ''`,
    Yaml,
    "/my-file",
  );


  // const VpSpecDoc = new Document(vpSpec, Yaml, null);

  // const loadApiSpec = () => {

  //   // await fetch('https://raw.githubusercontent.com/jbend/Spectral-App/main/src/assets/viewpoint.json');

  // }

  // const spectral = new Spectral();
  // spectral.setRuleset({
  //   // a ruleset has to be provided
  //   rules: {
  //     "no-empty-description": {
  //       given: "$..description",
  //       message: "Description must not be empty",
  //       then: {
  //         function: truthy,
  //       },
  //     },
  //   },
  // });  


  const parse = async () => {
    setLoading(true);
    try {
      console.log("Parse Start");

      const vpSpec = 'https://raw.githubusercontent.com/jbend/Spectral-App/main/src/assets/viewpoint.json';
      const ruleSetLocation = 'https://raw.githubusercontent.com/jbend/Spectral-App/main/src/assets/basic-rules.yaml';

      const spectral = new Spectral();

      const ruleSetResponse = await fetch(ruleruleSetLocationSet);
      const ruleSetDoc = await ruleSetResponse.text();
      console.log(ruleSetDoc);

      const ruleSet = new Ruleset()

      spectral.setRuleset(ruleSet);

      const response = await fetch(vpSpec);
      const specDoc = await response.json();
      console.log('Fetch spec doc', specDoc);

      const vpSpecDoc = new Document(specDoc, Yaml, vpSpec);
      const result = await spectral.run(vpSpecDoc);

      console.log(result);

      // fetch(vpSpec)
      // .then(res => {
      //   if (!res.ok) {
      //     throw new Error('some error occurred'); // can be replaced with any other error handling you need
      //   }
    
      //   return res;
      // })
      // .then(res => res.text())
      // .then(text => {
      //   const doc = new Document(text, Json, vpSpec); // or Parsers.Yaml if you deal with Yaml
      //   const spectral = new Spectral();
      //   spectral.registerFormat('oas2', isOpenApiv2);
      //   spectral.registerFormat('oas3', isOpenApiv3);
      //   return spectral.loadRuleset('spectral:oas').then(() => spectral.run(doc));
      // })
      // .then(results => {
      //   return html(results, {
      //     failSeverity: DiagnosticSeverity.Warning, // or you can use some other setting, depending on the severity you like
      //   });
      // });

      console.log("Parse Finish");

    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
    // spectral.run(myDocument).then(console.log);    
  }

  const toggleLoading = () => {
    setLoading(!loading);
  }

  return (
    <>
      <h1>Linter</h1>
      <div>
        <Button onClick={parse}>Parse</Button>
      </div>
      <div>
        <Button onClick={toggleLoading}>Toggle Loading</Button>
      </div>
      <Loader show={loading} />
    </>
  )

}