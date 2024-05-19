import React from "react";

interface CookiesModalProps {
  onClose: () => void;
}

export function ConditionsModal({ onClose }: CookiesModalProps) {
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              CONDICIONES GENERALES DE USO
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:text-white-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="terms-conditions p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-auto h-[70vh] text-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold mb-2">Información general</h2>
            <p className="mb-4">
              Conforme al Art. 10 de la Ley 34/2002, de 11 de julio, de
              servicios de la sociedad de la información y de comercio
              electrónico (LSSI-CE) y la Ley 56/2007, de 28 de diciembre, de
              Medidas de Impulso de la Sociedad de la Información, se informa
              que la página de los presentes sitios web:
              <a
                href="https://www.click-wiser.com"
                className="text-blue-500 hover:underline ml-1"
              >
                www.click-wiser.com
              </a>
              , se ponen al servicio de los usuarios por el profesional autónomo
              cuyos datos identificativos son:
            </p>
            <p className="mb-4">
              <strong>Responsable:</strong> Irina Shuvatova
              <br />
              <strong>Correo electrónico:</strong> ii.shuvatova@yahoo.com
              <br />
              <strong>Teléfono:</strong> +34 664136580
            </p>

            <h2 className="text-xl font-semibold mb-2">
              Condiciones generales de uso
            </h2>
            <p className="mb-4">
              El acceso y/o uso de este sitio web de Irina Shuvatova atribuye la
              condición de usuario, que acepta, desde dicho acceso y/o uso, las
              Condiciones Generales de Uso aquí reflejadas. Las citadas
              Condiciones serán de aplicación independientemente de las
              Condiciones Generales de Contratación que, en cada caso, resulten
              de obligado cumplimiento.
            </p>
            <p className="mb-4">
              Irina Shuvatova se reserva la facultad de modificar
              unilateralmente las condiciones y términos de uso de estos sitios
              web. Cualquier modificación de los mismos se informará
              convenientemente en la propia web. La entrada en vigor de las
              modificaciones de las condiciones de uso se producirá desde el
              momento de su publicación en este sitio web.
            </p>
            <p className="mb-4">
              No se podrá alterar, cambiar, modificar, o adaptar este sitio web.
              No obstante, Irina Shuvatova se reserva la facultad de efectuar,
              en cualquier momento, cuantos cambios, actualizaciones y
              modificaciones estime convenientes, pudiendo hacer uso de tal
              facultad en cualquier momento y sin necesidad de previo aviso al
              usuario. Asimismo, Irina Shuvatova se reserva el derecho a
              eliminar, limitar, o impedir el acceso a esta web cuando surjan
              dificultades técnicas por hechos o circunstancias ajenos a Irina
              Shuvatova que, a su criterio disminuyan o anulen los niveles de
              seguridad adoptados para el adecuado funcionamiento de este sitio
              web.
            </p>
            <p className="mb-4">
              Está expresamente prohibido utilizar el sitio web de una forma que
              no esté prevista, alterar y entorpecer su funcionamiento o
              realizar ningún tipo de abuso de sus funcionalidades y contenidos.
              Tampoco se permite el acceso a información no autorizada ni la
              suplantación de identidades.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              Información y contenido
            </h2>
            <p className="mb-4">
              La información contenida en el presente sitio web tiene por
              finalidad facilitar el conocimiento de los distintos productos y
              servicios ofrecidos por Irina Shuvatova. Dicha información es la
              vigente a la fecha de la última actualización y ha de considerarse
              como meramente indicativa para el usuario.
            </p>
            <p className="mb-4">
              Irina Shuvatova no será responsable por daños, perjuicios,
              pérdidas, reclamaciones o gastos, producidos por: interferencias,
              interrupciones, fallos, omisiones, averías telefónicas, retrasos,
              bloqueos o desconexiones en el funcionamiento del sistema
              electrónico, motivadas por deficiencias, sobrecargas y errores en
              las líneas y redes de telecomunicaciones, o por cualquier otra
              causa ajena a su control; intromisiones ilegítimas mediante el uso
              de programas malignos de cualquier tipo y a través de cualquier
              medio de comunicación, tales como virus informáticos o
              cualesquiera otros; uso indebido o inadecuado del sitio web;
              errores de seguridad o navegación producidos por un mal
              funcionamiento del navegador o por el uso de versiones no
              actualizadas del mismo.
            </p>
            <p className="mb-4">
              Irina Shuvatova no se responsabiliza en modo alguno de aquellos
              contenidos, actividades comerciales, productos y servicios de
              terceros, que pudiesen visualizarse mediante enlaces electrónicos
              (links), directa o indirectamente, a través de este sitio web. La
              presencia de links en el sitio web, salvo manifestación expresa en
              contrario, tiene una finalidad meramente informativa y en ningún
              caso supone sugerencia, invitación o recomendación sobre los
              mismos. Estos enlaces no representan ningún tipo de relación entre
              Irina Shuvatova y los particulares o empresas titulares de los
              sitio webs a los que puede accederse mediante estos enlaces. Irina
              Shuvatova se reserva el derecho de retirar de modo unilateral y en
              cualquier momento los links que aparecen en su sitio web.
            </p>
            <p className="mb-4">
              Irina Shuvatova no ha intervenido ni tiene vinculación con el
              contenido de los sitios web que pudieran visualizarse en este
              sitio web mediante enlaces electrónicos (links) ajenos, los cuales
              son responsabilidad exclusiva de los particulares o empresas
              titulares de los sitio webs a los que se acceda en cada caso.
              Cualquier queja, consulta o reclamación relacionada con el
              contenido de dichos sitio webs, o al tratamiento de datos
              personales que vaya a llevarse a cabo, deberá ser dirigido
              directamente a los particulares o empresas titulares de dichos
              sitio webs.
            </p>
            <p className="mb-4">
              Irina Shuvatova no asume responsabilidad por el contenido de
              cualquier foro o debate en el ciberespacio (chat), boletines o
              cualquier tipo de transmisiones, que estén vinculadas a este sitio
              web y cooperará, si es requerida por orden judicial o por las
              autoridades pertinentes, en la identificación de las personas
              responsables de aquellos contenidos que violen la ley.
            </p>
            <p className="mb-4">
              Irina Shuvatova no asume ninguna responsabilidad que pudiera
              derivarse de la transmisión de información entre usuarios. La
              responsabilidad de las manifestaciones difundidas en este sitio
              web es exclusiva de quienes las realizan. Queda prohibido
              cualquier tipo de transmisión de datos que los usuarios puedan
              realizar a éste o mediante este sitio web u otros accesos
              controlados por Irina Shuvatova, que infrinjan los derechos de
              propiedad de terceros y/o cuyo contenido sea ilegal, amenazante,
              difamatorio, obsceno, pornográfico, o la transmisión de cualquier
              otro material que constituya o incite una conducta que pueda ser
              considerada un ilícito penal.
            </p>
            <p className="mb-4">
              Irina Shuvatova se reserva el derecho a impedir o prohibir el
              acceso a cualquier usuario de Internet que introduzca en este
              sitio web cualquier contenido contrario a las presentes
              condiciones generales de uso, la legislación vigente, o inmoral,
              reservándose el derecho de ejercer las medidas legales que estime
              oportunas para evitar este tipo de conductas.
            </p>

            <h2 className="text-xl font-semibold mb-2">
              Propiedad industrial e intelectual
            </h2>
            <p className="mb-4">
              Irina Shuvatova es titular de todos los derechos de propiedad
              intelectual e industrial de su página web, así como de los
              elementos contenidos en la misma (a título meramente enunciativo,
              imágenes, sonido, audio, vídeo, software o textos; marcas o
              logotipos, combinaciones de colores, estructura y diseño,
              selección de materiales usados, programas de ordenador necesarios
              para su funcionamiento, acceso y uso, etc.), o bien de sus
              licenciantes. Todos los derechos reservados.
            </p>
            <p className="mb-4">
              En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo
              segundo, de la Ley de Propiedad Intelectual, quedan expresamente
              prohibidas la reproducción, la distribución y la comunicación
              pública, incluida su modalidad de puesta a disposición, de la
              totalidad o parte de los contenidos de esta página web, con fines
              comerciales, en cualquier soporte y por cualquier medio técnico,
              sin la autorización de Irina Shuvatova. El usuario se compromete a
              respetar los derechos de Propiedad Intelectual e Industrial
              titularidad de Irina Shuvatova. El acceso a este sitio web no
              otorga al usuario derecho ni titularidad alguna sobre los derechos
              de propiedad intelectual y/o industrial.
            </p>
            <p className="mb-4">
              No obstante el usuario podrá visualizar los elementos del portal e
              incluso imprimirlos. Queda prohibido, sin embargo, copiarlos y
              almacenarlos en el disco duro de su ordenador o en cualquier otro
              soporte físico incluso cuando sea para su uso personal y privado.
              El usuario deberá abstenerse de suprimir, alterar, eludir o
              manipular cualquier dispositivo de protección o sistema de
              seguridad que estuviera instalado en estos sitios web.
            </p>
            <p className="mb-4">
              Todo uso o modificación de los elementos contenidos en la página
              web para cualquier otro fin distinto del autorizado en las
              Condiciones Generales será considerado una violación de las leyes
              internacionales del “copyright”, que protegen los derechos de
              autor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
