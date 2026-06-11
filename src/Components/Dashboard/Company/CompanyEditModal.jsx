import { ArrowUpFromLine, Envelope, Pencil } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import Image from "next/image";

const CompanyEditModal = () => {
  return (
    <Modal>
      <Button variant="secondary">
        <Pencil></Pencil>
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-150 w-full">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="font-bold text-lg">
                Update profile
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="mt-5 p-2">
              <Surface variant="default">
                <Form className="">
                  <div className=" space-y-5">
                    <TextField name="company_name" isRequired>
                      <Label className="">Company Name:</Label>
                      <Input
                        className=" rounded-md"
                        placeholder="Enter your company name"
                      />
                    </TextField>

                    {/* select */}
                    <Select
                      isRequired
                      className=""
                      name="category"
                      placeholder="Select one"
                    >
                      <Label>Industry / Category</Label>
                      <Select.Trigger className="rounded-md">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className="rounded-md">
                        <ListBox>
                          <ListBox.Item id="technology" textValue="Technology">
                            Technology
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="e-commerce" textValue="E-commerce">
                            E-commerce
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item
                            id="manufacturing"
                            textValue="Manufacturing"
                          >
                            Manufacturing
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="healthcare" textValue="Healthcare">
                            Healthcare
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item
                            id="agriculture"
                            textValue="Agriculture"
                          >
                            Agriculture
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="marketing" textValue="Marketing">
                            Marketing
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <TextField name="company_website" isRequired>
                      <Label className="">Website URL:</Label>
                      <Input
                        className="rounded-md"
                        placeholder="Enter your company Website."
                      />
                    </TextField>

                    <TextField name="company_location" isRequired>
                      <Label className="">Location:</Label>
                      <Input
                        className="rounded-md"
                        placeholder="Enter your company Location."
                      />
                    </TextField>

                    <TextField name="company_employee" isRequired>
                      <Label className="">Employee Count Range:</Label>
                      <Input
                        className="rounded-md"
                        placeholder="Enter your company employee count."
                      />
                    </TextField>

                    <div>
                      <Label>Company logo:</Label>
                      <div className="mt-1 flex items-center gap-5">
                        <Label className="w-15 h-15 rounded-md border border-[#444748] flex items-center justify-center cursor-pointer overflow-hidden">
                          {/* {logoURL ? (
                            <Image
                              src={logoURL}
                              alt="company logo"
                              width={50}
                              height={50}
                              className="w-full h-full object-cover"
                            ></Image>
                          ) : (
                            <ArrowUpFromLine className=""></ArrowUpFromLine>
                          )} */}

                          <ArrowUpFromLine className=""></ArrowUpFromLine>

                          <Input
                            type="file"
                            onChange={""}
                            className={"hidden"}
                          ></Input>
                        </Label>

                        <div>
                          <p>Upload Image</p>
                          <p className="text-sm text-white/70 mt-.5">
                            PNG, JPG up to 5MB
                          </p>
                        </div>
                      </div>
                    </div>

                    <TextField isRequired name="company_description">
                      <Label>Brief Description:</Label>
                      <TextArea placeholder="Tell us about company..." />
                    </TextField>
                  </div>

                  <div className="p-8 border-t border-[#444748] flex justify-end gap-4">
                    <Button
                      slot={"close"}
                      className={
                        "rounded-md border border-[#444748] bg-[#1F1F1F] px-8 py-3"
                      }
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className={
                        "rounded-md bg-white text-black font-black px-8 py-3"
                      }
                    >
                      Register Company
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CompanyEditModal;
