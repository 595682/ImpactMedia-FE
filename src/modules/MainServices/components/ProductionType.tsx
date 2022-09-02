import Button from '@/common/components/buttons/button';
import Wrapper from '@/Layout/Wrapper';
import Subtitle from '@/modules/Layout/components/Subtitle';
import Title from '@/modules/Layout/components/Title';

const ProductionType = () => {
  return (
    <div className="py-20">
      <Wrapper>
        <Subtitle>Different type of productions</Subtitle>
        <Title size="xl3">
          <span className="font-bold">PRODUCE THE</span> ANIMATED VIDEO YOU NEED
        </Title>
        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6  lg:h-2/3" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                  <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg  lg:rounded-lg">
                    <div className="flex flex-1 flex-col">
                      <div className="bg-theme-primary px-6 py-10 pb-0">
                        <div>
                          <div className="mx-16">
                            <div className="aspect-1 w-full rounded-full bg-white"></div>
                          </div>
                          <h3
                            className="mt-4 text-center text-2xl font-bold text-theme-secondary"
                            id="tier-hobby"
                          >
                            SHORTY
                          </h3>
                          <h3
                            className="text-center text-sm font-medium text-theme-secondary"
                            id="tier-hobby"
                          >
                            A promotional video of up to 2 minutes
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between bg-theme-primary p-4 text-center text-white sm:p-6 lg:p-6 xl:p-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequuntur adipisci a eligendi suscipit.
                        Inventore aut reiciendis, incidunt soluta tempora amet.
                        <div className="mt-8">
                          <Button color="secondary" title="I WANT THIS" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-10 max-w-lg  lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                  <div className="relative z-10 mx-2 rounded-lg bg-theme-primary shadow-xl lg:py-4">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg "
                      aria-hidden="true"
                    />

                    <div className="rounded-t-lg  px-6 pt-12 pb-0 text-white">
                      <div>
                        <div className="mx-32">
                          <div className="aspect-1 w-full rounded-full bg-white"></div>
                        </div>
                        <h3
                          className="mt-4 text-center text-2xl font-bold text-theme-secondary"
                          id="tier-hobby"
                        >
                          I HAVE A STORY
                        </h3>
                        <h3
                          className="text-center text-sm font-medium text-theme-secondary"
                          id="tier-hobby"
                        >
                          A long-form video up to 10 minutes
                        </h3>
                      </div>
                    </div>
                    <div className="rounded-b-lg bg-theme-primary px-6 pt-10 pb-8 text-center text-white sm:p-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur adipisci a eligendi suscipit. Inventore aut
                      reiciendis, incidunt soluta tempora amet.
                      <div className="mt-10">
                        <Button color="secondary" title="I WANT THIS" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                  <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-lg">
                    <div className="flex flex-1 flex-col">
                      <div className="bg-theme-primary px-6 py-10 pb-0">
                        <div>
                          <div className="mx-16">
                            <div className="aspect-1 w-full rounded-full bg-white"></div>
                          </div>
                          <h3
                            className="mt-4 text-center text-2xl font-bold text-theme-secondary"
                            id="tier-hobby"
                          >
                            CUSTOM
                          </h3>
                          <h3
                            className="text-center text-sm font-medium text-theme-secondary"
                            id="tier-hobby"
                          >
                            When you want something special
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between bg-theme-primary p-4 text-center text-white sm:p-6 lg:p-6 xl:p-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Consequuntur adipisci a eligendi suscipit.
                        Inventore aut reiciendis, incidunt soluta tempora amet.
                        <div className="mt-8">
                          <Button color="secondary" title="I WANT THIS" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default ProductionType;
