import { getRecruiterCompany } from "@/lib/api/company";
import { getCompanyJobs } from "@/lib/api/jobs";
import { auth } from "@/lib/auth";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const RecruiterJobs = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), //
  });
  const recruiterId = session?.user?.id;

  const company = await getRecruiterCompany(recruiterId);

  const companyId = company._id;

  const jobs = await getCompanyJobs(companyId);

  // const statusColors = {};

  return (
    <div className="max-w-330 px-3 mt-5">
      <div className="">
        <h2 className="font-bold text-3xl md:text-4xl">Manage All Jobs</h2>
        <p className="mt-1">
          View, update, and manage your current job postings.
        </p>
      </div>

      <div className="mt-10">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Job Title</Table.Column>
                <Table.Column>Type / Category</Table.Column>
                <Table.Column>Location</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>

              <Table.Body>
                {jobs.map((job) => (
                  <Table.Row key={job._id}>
                    <Table.Cell>{job.jobTitle}</Table.Cell>

                    <Table.Cell>{job.jobType}</Table.Cell>

                    <Table.Cell>
                      {job.location ? job.location : "Remote"}
                    </Table.Cell>

                    <Table.Cell>{job.status}</Table.Cell>

                    <Table.Cell className={"flex gap-5"}>
                      <Eye></Eye>

                      <Pencil></Pencil>

                      <TrashBin className="text-red-500"></TrashBin>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default RecruiterJobs;

/**
 {
    "_id": "6a210ea0fac25e70e7df75a0",
    "jobTitle": "My First Job",
    "jobCategory": "technology",
    "jobType": "full-time",
    "minSalary": "25000",
    "maxSalary": "30000",
    "currency": "USD",
    "location": "Dhaka",
    "deadline": "2026-06-30",
    "responsibilities": "Technology",
    "requirements": "Update technology",
    "benefits": "Free code",
    "isRemote": false,
    "companyId": "company_123",
    "status": "active",
    "isPubliclyVisible": true
}
 */
