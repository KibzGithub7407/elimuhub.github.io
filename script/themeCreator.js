function generateTemplate() {
  const name = document.getElementById("templateName").value;
  const url = document.getElementById("templateURL").value;
  const author = document.getElementById("author").value;

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<b:template xmlns:b="http://www.google.com/2005/gml/b">
  <b:skin><![CDATA[
    body { font-family: Arial; }
  ]]></b:skin>

  <b:template-skin>
    <b:section id="main">
      <b:widget id="Blog1" type="Blog" />
    </b:section>

    <!-- About Us Section -->
    <b:section id='aboutus' class='about-section' showaddelement='no'>
      <b:widget id='About1' type='Text' version='2'>
        <b:widget-settings>
          <b:setting name='title'>About Elimuhub</b:setting>
          <b:setting name='content'>
            <![CDATA[
              <p>Elimuhub Education Consultants is a Nairobi-based private tuition center offering personalized tutoring, homeschooling, and academic consulting across Kenya. We specialize in IGCSE, IB, American, British, CBC, KCSE, and adult education.</p>
            ]]>
          </b:setting>
        </b:widget-settings>
        <b:includable id='main'><div class='widget-content'><data:content/></div></b:includable>
      </b:widget>
    </b:section>

    <!-- Services Section -->
    <b:section id='services' class='services-section' showaddelement='no'>
      <b:widget id='Services1' type='Text' version='2'>
        <b:widget-settings>
          <b:setting name='title'>Our Services</b:setting>
          <b:setting name='content'>
            <![CDATA[
              <ul>
                <li><strong>Tuition & Homeschooling:</strong> Personalized in-home tutoring across Nairobi.</li>
                <li><strong>Study Abroad:</strong> Guidance on international universities, scholarships, and visa support.</li>
                <li><strong>School Placement:</strong> Support finding suitable schools (local & international).</li>
                <li><strong>Special Education:</strong> Tutors trained in supporting learners with disabilities.</li>
                <li><strong>Muslim School Placement:</strong> We place learners in faith-friendly academic environments.</li>
              </ul>
            ]]>
          </b:setting>
        </b:widget-settings>
        <b:includable id='main'><div class='widget-content'><data:content/></div></b:includable>
      </b:widget>
    </b:section>

  </b:template-skin>
</b:template>`;

  document.getElementById("output").value = xml;
}
