"use client";

import { createCompany } from "@/lib/actions/company";

import { ArrowUpFromLine } from "@gravity-ui/icons";
import {
  Form,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import CompanyProfileDesign from "./CompanyProfileDesign";

const CompanyRegisterForm = ({ company, session }) => {
  const [logoURL, setLogoUrl] = useState();

  const recruiter = session?.user;

  const uploadImage = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    // api call for host image imageBB
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API}`,
      { method: "POST", body: formData },
    );
    const data = await res.json();

    const companyLogoUrl = data?.data?.url; // set logo

    if (data) {
      setLogoUrl(companyLogoUrl);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const companyData = Object.fromEntries(formData.entries());

    const updateCompanyData = {
      ...companyData,
      company_logo: logoURL,
      company_status: "Pending",
      recruiterId: recruiter?.id,
      recruiterEmail: recruiter?.email,
    };

    // console.log(updateCompanyData, "from company registration form page");

    const payload = await createCompany(updateCompanyData);

    if (payload?.insertedId) {
      toast.success("company register successful!");
      e.target.reset();
    }
  };

  return (
    <div className="max-w-183 mx-auto px-3 mt-5 ">
      {!company._id ? (
        <div className="border border-[#444748] rounded-md relative">
          <div className="p-8 bg-[#] border-b border-[#444748]">
            <h2 className="text-2xl font-medium">Register New Company</h2>
            <p className="mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>

          <div className="">
            <Form onSubmit={onSubmit} className="">
              <div className="p-8 space-y-5">
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

                      <ListBox.Item id="agriculture" textValue="Agriculture">
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
                      {logoURL ? (
                        <Image
                          src={logoURL}
                          alt="company logo"
                          width={50}
                          height={50}
                          className="w-full h-full object-cover"
                        ></Image>
                      ) : (
                        <ArrowUpFromLine className=""></ArrowUpFromLine>
                      )}

                      <Input
                        type="file"
                        onChange={uploadImage}
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
          </div>
        </div>
      ) : (
        <CompanyProfileDesign company={company}></CompanyProfileDesign>
      )}
    </div>
  );
};

export default CompanyRegisterForm;
