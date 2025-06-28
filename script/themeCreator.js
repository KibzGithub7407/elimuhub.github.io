function generateTemplate() {
  const name = document.getElementById("templateName").value;
  const url = document.getElementById("templateURL").value;
  const author = document.getElementById("author").value;

  const xml = \`<?xml version="1.0" encoding="UTF-8" ?>
<b:template xmlns:b="http://www.google.com/2005/gml/b">
  <b:skin><![CDATA[
    body { font-family: Arial; }
  ]]></b:skin>
  <b:template-skin>
    <b:section id="main">
      <b:widget id="Blog1" type="Blog" />
    </b:section>
  </b:template-skin>
</b:template>\`;

  document.getElementById("output").value = xml;
}
